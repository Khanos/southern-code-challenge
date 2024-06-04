import type { NextApiRequest, NextApiResponse } from 'next'
import type { Item } from '../../types'
 
type ResponseData = {
  message: string
  items: Item[]
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
    message: 'Hello from Next.js!',
    items: [
      {
        id: 1,
        name: "Product 1",
        description: "Description of Product 1",
        modelFileName: "product1.glb",
        likes: 10,
        dislikes: 2,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description of Product 2",
        modelFileName: "product2.glb",
        likes: 20,
        dislikes: 3,
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description of Product 3",
        modelFileName: "product3.glb",
        likes: 30,
        dislikes: 4,
      },
      {
        id: 4,
        name: "Product 4",
        description: "Description of Product 4",
        modelFileName: "product4.glb",
        likes: 40,
        dislikes: 5,
      },
      {
        id: 5,
        name: "Product 5",
        description: "Description of Product 5",
        modelFileName: "product5.glb",
        likes: 50,
        dislikes: 6,
      },
      {
        id: 6,
        name: "Product 6",
        description: "Description of Product 6",
        modelFileName: "product6.glb",
        likes: 60,
        dislikes: 7,
      }
    ],
  })
}