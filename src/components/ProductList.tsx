import Product from "./Product";
import type { Item } from "../types";

export default function ProductList(props: { items: Item[]}) {
  const { items } = props;
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(21rem,1fr))] justify-items-center mx-auto">
      {items.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </ul>
  );
}
