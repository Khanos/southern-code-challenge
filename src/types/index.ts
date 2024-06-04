export interface Item {
  id: number;
  name: string;
  description: string;
  modelFileName: string;
  likes: number;
  dislikes: number;
}

export interface ItemList {
  items: Item[];
}