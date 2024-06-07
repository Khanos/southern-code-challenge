'use client';

import { useRef, useState } from 'react';
import Loading from '../components/Loading';
import { trpc } from "../app/_trpc/client";

type CommentsProps = {
  productId: number;
};

export default function Comments(props: CommentsProps) {
  const { productId } = props;
  const [editingComment, setEditingComment] = useState<{id: number, user: string, content: string} | null>(null);
  const userInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);

  const getComments = trpc.getCommentsByProductId.useQuery(Number(productId));
  const addCommentMutation = trpc.addComment.useMutation({
    onSettled: (result) => {
      if (!result) return;
      getComments.refetch();
      userInputRef.current!.value = '';
      contentInputRef.current!.value = '';
    }
  });
  const editCommentMutation = trpc.editComment.useMutation({
    onSettled: (result) => {
      if (!result) return;
      getComments.refetch();
    }
  });
  const deleteCommentMutation = trpc.deleteComment.useMutation({
    onSettled: (result) => {
      if (!result) return;
      getComments.refetch();
    }
  });

  const handleEdit = (comment: {id: number, user: string, content: string}) => {
    setEditingComment(comment);
    contentInputRef.current?.focus();
  }
  const handleDelete = async (id: number) => {
    deleteCommentMutation.mutate(id);
  }
  const handleSubmit = async (e: any) => {
    if (!userInputRef.current || !contentInputRef.current) {
      return;
    }
    const data = {
      id: productId,
      user: userInputRef.current?.value,
      content: contentInputRef.current?.value,
    };
    if (editingComment) {
      const { id, ...rest } = data;
      editCommentMutation.mutate({id: editingComment.id, ...rest});
    } else {
      addCommentMutation.mutate(data);
    }
  }
  const handleTextareaChange = (e: any) => {
    if (editingComment) {
      setEditingComment({
        ...editingComment,
        content: e.target.value,
      });
    }
  }

  if (!getComments.data) {
    return <Loading />;
  }
  return (
    <div className="lg:w-4/5 mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="flex flex-col space-y-4">
        {getComments.data.length === 0 && <p>No comments yet</p>}
        {getComments.data.map((comment) => (
          <div key={comment.id} className="flex flex-col border border-gray-300 rounded p-4">
            <div className="flex justify-between mb-4">
              <div id="left" className='flex items-center'>
                <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4.286a2.857 2.857 0 11-2.857 2.857A2.857 2.857 0 0112 6.286zm0 11.428c3.182 0 6.286 1.59 6.286 4.762v1.19H5.714v-1.19c0-3.172 3.104-4.762 6.286-4.762z" />
                </svg>
                <h3 className="font-semibold">  
                  {comment.user}
                </h3>
              </div>
              <div id="right" className="flex items-center gap-3">
                <button onClick={() => handleEdit(comment)} className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(comment.id)} className="p-2 bg-red-500 hover:bg-red-600 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold my-4">Add a comment</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input ref={userInputRef} name="user" className="w-full px-4 py-2 border border-gray-300 rounded mb-4 cursor-text" type="text" placeholder="Name" value={editingComment ? editingComment.user : ''}/>
        <textarea ref={contentInputRef} name="content" className="w-full px-4 py-2 border border-gray-300 rounded cursor-text" placeholder="Write a comment" onChange={handleTextareaChange} value={editingComment ? editingComment.content : ''}></textarea>
        <div className="flex justify-end my-2">
          <button className="max-w-28 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
  }
