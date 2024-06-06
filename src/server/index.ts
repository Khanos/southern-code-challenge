import { publicProcedure, router } from "./trpc";
import { mockProduct, mockProducts } from "../mocks";
import { eq, lt, gte, ne } from 'drizzle-orm';
import { db } from "../../drizzle/db";
import { ProductsTable, CommentsTable } from "../../drizzle/schema";
import { get } from "http";

export const appRouter = router({
  getProducts: publicProcedure.query(async () => {
    try {
      const result = await db.select().from(ProductsTable);
      if (result && !result.length) {
        throw new Error("No products found");
      }
      return result;
    } catch (error) {
      console.error(error);
      return mockProducts;
    }
  }),
  getProductById: publicProcedure.input((val: unknown) => {
    if (val === null || typeof val !== "number") {
      throw new Error("Expected an id");
    }
    return val as number;
  }).query(async (val) => {
    const { input } = val;
    try {
      const result = await db.select().from(ProductsTable).where(eq(ProductsTable.id, Number(input)));
      console.log(result);
      if (result && !result.length) {
        throw new Error("Product not found");
      }
      return result[0];
    } catch (error) {
      console.error(error);
      return mockProduct;
    }
  }),
  getCommentsByProductId: publicProcedure.input((val: unknown) => {
    if (val === null || typeof val !== "number") {
      throw new Error("Expected an id");
    }
    return val as number;
  }).query(async (val) => {
    const { input } = val;
    try {
      const result = await db.select().from(CommentsTable).where(eq(CommentsTable.productId, Number(input)));
      if (result && !result.length) {
        throw new Error("No comments found");
      }
      return result;
    } catch (error) {
      console.error(error);
      return [];
    }
  }),
});

export type AppRouter = typeof appRouter;