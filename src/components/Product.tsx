import Image from "next/image";
import Likes from "./Likes";
import type { Item } from "../types";

export default function Product(props: Item) {
  const { id, name, author, description, thumbnail, likes, dislikes } = props;
  return (
    <li className="w-[21rem] bg-gray-100 bg-opacity-80 p-4 mt-10 rounded-md shadow-md">
      <div className="w-[300px] min-h-[300px] flex justify-center items-center mb-2 relative">
        <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority fill className="object-cover" alt="image of the product" src={`${thumbnail}`} />
      </div>
      <h1 className="line-clamp-1 text-lg font-bold">{name}</h1>
      <p className="text-sm text-gray-500 mb-2">by {author}</p>
      <p className="line-clamp-2">{description}</p>
      <Likes productId={id} likes={likes} dislikes={dislikes} />
      <div className="flex justify-center mt-4">
        <a href={`/product/${id}`} className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See details
        </a>
      </div>
    </li>
  );
}
