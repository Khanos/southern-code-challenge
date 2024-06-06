import { db } from './db'
import { 
  ProductsTable, 
  NewProduct,
  CommentsTable,
  NewComment,
} from './schema'

const newProducts: NewProduct[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos", 
    modelFileName: "product1.glb",
    likes: 10,
    dislikes: 2,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2, e omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed",
    modelFileName: "product2.glb",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3, ystem, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that ar",
    modelFileName: "product3.glb",
    likes: 30,
    dislikes: 4,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of Product 4,  et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et ha",
    modelFileName: "product4.glb",
    likes: 40,
    dislikes: 5,
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description of Product 5,  distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these m",
    modelFileName: "product5.glb",
    likes: 50,
    dislikes: 6,
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description of Product 6, m rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sa",
    modelFileName: "product6.glb",
    likes: 60,
    dislikes: 7,
  }
];

const newComments: NewComment[] = [
  {
    id: 1,
    productId: 1,
    user: "Test User 1",
    content: "Comment 1,  in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except ",
  },
  {
    id: 2,
    productId: 1,
    user: "Test User 2",
    content: "Comment 2,  ate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis",
  },
  {
    id: 3,
    productId: 1,
    user: "Test User 3",
    content: "Comment 3,  distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis",
  },
  {
    id: 4,
    productId: 2,
    user: "Test User 4",
    content: "Comment 4,  voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et",
  },
  {
    id: 5,
    productId: 4,
    user: "Test User 5",
    content: "Comment 5,  voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores",
  },
  {
    id: 6,
    productId: 2,
    user: "Test User 6",
    content: "Comment 6,  alias consequatur, aut perferendis doloribus asperiores repellat. ",
  },
];

export async function seed() {
  // Seed products
  const products = await db.insert(ProductsTable).values(newProducts);
  console.log('Seeded products:', products);

  // Seed comments
  const comments = await db.insert(CommentsTable).values(newComments);
  console.log('Seeded comments:', comments);
}

seed().catch(console.error);