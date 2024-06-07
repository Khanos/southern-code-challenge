import {
  pgTable,
  integer,
  text,
  timestamp,
  serial,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const ProductsTable = pgTable(
  'products',
  {
    id: integer('id').primaryKey().unique(),
    name: text('name').notNull(),
    author: text('author').notNull(),
    description: text('description').notNull(),
    thumbnail: text('thumbnail').notNull(),
    modelFileName: text('modelFileName').notNull(),
    likes: integer('likes').default(0),
    dislikes: integer('dislikes').default(0),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  }
)
export type Product = InferSelectModel<typeof ProductsTable>
export type NewProduct = InferInsertModel<typeof ProductsTable>

export const CommentsTable = pgTable(
  'comments',
  {
    id: serial('id').primaryKey().unique(),
    productId: integer('productId').references(() => ProductsTable.id),
    user: text('user').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
)
export type Comment = InferSelectModel<typeof CommentsTable>
export type NewComment = InferInsertModel<typeof CommentsTable>