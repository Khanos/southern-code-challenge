import Likes from '../../../components/Likes'
import Comments from '../../../components/Comments'
import { Item } from '../../../types'

type RouteParams = {
  id: string;
};

async function getData(id: string) {
  const apiURL = `${process.env.URL}/api/productById?id=${id}`
  const res = await fetch(apiURL)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Product(props: { params: RouteParams }) {
  const { params } = props;
  if (!params) {
    return null;
  }
  const id = params.id || 'default';
  const product = await getData(id) as Item

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"></div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Lego Collection</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.name} {product.id}</h1>
            <p className="leading-relaxed mb-4">{product.description}</p>
            <div className="flex justify-end">
              <Likes likes={product.likes} dislikes={product.dislikes} />
            </div>
          </div>
        </div>
        <Comments />
      </div>
    </section>
  )
}