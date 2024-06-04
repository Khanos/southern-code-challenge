import Image from "next/image";
import ProductList from "../components/ProductList";
import type { ItemList } from "../types";

async function getData() {
  const res = await fetch(`${process.env.URL}/api/products`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const { items } = await getData() as ItemList
  return (
    <main className="min-h-screen min-w-screen p-24">
     <ProductList items={items} />
    </main>
  );
}
