import Image from "next/image";
import ProductList from "../components/ProductList";
import type { ItemList } from "../types";

async function getData() {
  const apiURL = `${process.env.URL}/api/products`
  const res = await fetch(apiURL)
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
