'use client';
import { trpc } from "./_trpc/client";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import type { Item } from "../types";

export default function Home() {
  const response = trpc.getProducts.useQuery();
  if (response.error) {
    return <div>Error: {response.error.message}</div>;
  }
  const items = response.data;
  if (!items) {
    return <Loading />;
  }
  return (
    <main className="min-h-screen min-w-screen p-24">
     <ProductList items={items as Item[]} />
    </main>
  );
}
