export default function Comments() {
  const comments = [
    {
      id: 1,
      user: "User 1",
      comment: "Comment 1",
    },
    {
      id: 2,
      user: "User 2",
      comment: "Comment 2",
    },
  ];
  return (
    <div className="lg:w-4/5 mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="flex flex-col space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col border border-gray-300 rounded p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4.286a2.857 2.857 0 11-2.857 2.857A2.857 2.857 0 0112 6.286zm0 11.428c3.182 0 6.286 1.59 6.286 4.762v1.19H5.714v-1.19c0-3.172 3.104-4.762 6.286-4.762z" />
              </svg>
              <h3 className="font-semibold">  
                {comment.user}
              </h3>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold my-4">Add a comment</h2>
      <form className="mt-4">
        <input className="w-full px-4 py-2 border border-gray-300 rounded mb-4" type="text" placeholder="Name" />
        <textarea className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Write a comment"></textarea>
        <div className="flex justify-end my-2">
          <button className="max-w-28 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
  }
