import type { NextApiRequest, NextApiResponse } from 'next'
import type { Item } from '../../types'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item>
) {
  const {
    query,
    method,
  } = req;
  const id = query.id as string || '0';
  res.status(200).json({
    id: Number(id),
    name: "Product 1",
    description: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
    modelFileName: "product1.glb",
    likes: 10,
    dislikes: 2,
  })
}