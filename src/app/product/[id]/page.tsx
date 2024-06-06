'use client';
import Likes from '../../../components/Likes'
import Comments from '../../../components/Comments'
import Loading from '../../../components/Loading'
import { trpc } from "../../_trpc/client";

type RouteParams = {
  id: string;
};

export default function Product(props: { params: RouteParams }) {
  const { params } = props;
  if (!params || !params.id) {
    return null;
  }
  const id = Number(params.id);
  const response = trpc.getProductById.useQuery(id);
  if (response.error) {
    return <div>Error: {response.error.message}</div>;
  }
  const product = response.data;
  if (!product) {
    return <Loading />;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white p-4">
      <div className='flex justify-center'>
        <a href='/' className="text-gray-500 hover:text-gray-700 text-lg underline">
          Go back
        </a>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"></div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Lego Collection</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.name} - id: {product.id}</h1>
            <p className="leading-relaxed mb-4">{product.description}</p>
            <div className="flex justify-end">
              <Likes likes={product.likes || 0} dislikes={product.dislikes || 0} />
            </div>
          </div>
        </div>
        <Comments productId={product.id}/>
      </div>
    </section>
  )
}