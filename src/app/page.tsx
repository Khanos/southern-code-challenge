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
    <main className="min-h-screen min-w-screen">
      <h1 className="text-4xl font-bold text-center mt-6 mb-4">Lego Collection</h1>
      <p className="text-center text-lg text-gray-500 p-0 m-0">Southern Code Full Stack Node/React Challenge: 3D Product Display Web Application</p>
      <p className="text-center text-lg text-gray-500 p-0 m-0 mb-6">
        By: <span className="">Epilef Rodriguez</span>, and 
        Shared on: <a href="https://github.com/Khanos/southern-code-challenge" target="_blank" className="text-blue-500 hover:text-blue-700">Private Github Repo</a></p>
      <ProductList items={items as Item[]} />
    </main>
  );
}
