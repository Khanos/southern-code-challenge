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
    name: "Lego Ken Masters Minifigure",
    author: "Dr. Heinz Doofenshmirtz",
    description: `This is a 3d model of lego Ken Masters from street fighter 3 3rd strike fight for the future.

    So…
    
    Ya…
    
    Bye…
    
    License:
    CC AttributionCreative Commons Attribution
    
    Learn more`,
    thumbnail: "/img/lego-1.png", 
    modelFileName: "lego-model-1.glb",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    name: "Dr. Heinz Doofenshmirtz",
    author: "Dr. Heinz Doofenshmirtz",
    description: `This is another 3d model of Rex fury but the one you unlock first in the game. also, if you want spoilers on how you unlock him, just continue reading the description. (Spoilers! when falling to earth, you unlock rex Fury!)

    So…
    
    Ya…
    
    Bye…
    
    Check out my mecabricks account SonicandTails! link:https://www.mecabricks.com/en/user/sonicandtails.`,
    thumbnail: "/img/lego-2.png",
    modelFileName: "lego-model-2.glb",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 3,
    name: "Chase Mccain Firefighter",
    author: "Dr. Heinz Doofenshmirtz",
    description: `This is a 3d model of Chase mccain from Lego city undercover in his Firefighter disguise.

    So…
    
    Ya…
    
    Bye…
    
    License:
    CC AttributionCreative Commons Attribution
    
    Learn more`,
    thumbnail: "/img/lego-3.png",
    modelFileName: "lego-model-3.glb",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 4,
    name: "Chase Mccain Astronaut (Cutscene Torso)",
    author: "Dr. Heinz Doofenshmirtz",
    description: `This is a 3d model of Chase Mccain from Lego city undercover in his astronaut disguise.

    So…
    
    Ya…
    
    Bye…
    
    License:
    CC AttributionCreative Commons Attribution
    
    Learn more`,
    thumbnail: "/img/lego-4.png",
    modelFileName: "lego-model-4.glb",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 5,
    name: "Ryu Minifigure.",
    author: "Dr. Heinz Doofenshmirtz",
    description: `This is a 3d model of a Lego minifigure of Ryu from the original street fighter series . also I made this in Mecabricks. Please subscribe to my channel Musabanana2012! and Musabuilt.

    So…
    
    Ya....
    
    Bye…
    
    License:
    CC AttributionCreative Commons Attribution
    
    Learn more`,
    thumbnail: "/img/lego-5.png",
    modelFileName: "lego-model-5.glb",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 6,
    name: "Chase Mccain Construction Worker",
    author: "Dr. Heinz Doofenshmirtz",
    description: `This is a 3d model of Chase Mccain from Lego city undercover in his construction disguise. The torso is the wrong one. Oops!

    So…
    
    Ya…
    
    Bye…
    
    License:
    CC AttributionCreative Commons Attribution
    
    Learn more`,
    thumbnail: "/img/lego-6.png",
    modelFileName: "lego-model-6.glb",
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