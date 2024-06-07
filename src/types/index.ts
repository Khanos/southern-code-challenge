export interface Item {
  id: number;
  name: string;
  author: string;
  description: string;
  thumbnail: string;
  modelFileName: string;
  likes: number;
  dislikes: number;
}

export interface ItemList {
  items: Item[];
}

export interface SetLikesInput {
  id: number;
  likes: number;
  dislikes: number;
}

export interface SetCommentsInput {
  id: number;
  user: string;
  content: string;
}
