import Likes from "./Likes";
import type { Item } from "../types";

export default function Product(props: Item) {
  const { id, name, description, modelFileName, likes, dislikes } = props;
  return (
    <li className="w-[21rem] bg-gray-200 p-4">
      <div className="w-[300px] h-[300px] flex justify-center items-center border border-cyan-300 mb-2">
        {modelFileName}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{modelFileName}</p>
      <Likes likes={likes} dislikes={dislikes} />
      <div className="flex justify-center mt-4">
        <a href={`/product/${id}`} className="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See details
        </a>
      </div>
    </li>
  );
}
