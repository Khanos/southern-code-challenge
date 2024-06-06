import { publicProcedure, router } from "./trpc";
import { mockProduct, mockProducts } from "../mocks";
import { eq, lt, gte, ne } from 'drizzle-orm';
import { db } from "../../drizzle/db";
import { ProductsTable, CommentsTable } from "../../drizzle/schema";
import type { SetLikesInput } from "../types";

export const appRouter = router({
  getProducts: publicProcedure.query(async () => {
    try {
      const result = await db.select().from(ProductsTable).orderBy(ProductsTable.id);
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
  increaseLikes: publicProcedure.input((val: unknown) => {
    const input = val as SetLikesInput
    if (input === null || typeof input !== "object") {
      throw new Error("Expected an object");
    }
    return input;
  }).mutation(async(val) => {
    const { input } = val;
    const newLikes = input.likes + 1;
    const newDislikes = input.dislikes - 1 < 0 ? 0 : input.dislikes - 1;
    try {
      const result = await db.update(ProductsTable).set({ likes: newLikes, dislikes: newDislikes}).where(eq(ProductsTable.id, Number(input.id)));
      if (!result) {
        throw new Error("Product not found");
      }
      return {
        likes: newLikes,
        dislikes: newDislikes,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }),
  increaseDislikes: publicProcedure.input((val: unknown) => {
    const input = val as SetLikesInput
    if (input === null || typeof input !== "object") {
      throw new Error("Expected an object");
    }
    return input;
  }).mutation(async(val) => {
    const { input } = val;
    const newDislikes = input.dislikes + 1;
    const newLikes = input.likes - 1 < 0 ? 0 : input.likes - 1;
    try {
      const result = await db.update(ProductsTable).set({ likes: newLikes, dislikes: newDislikes}).where(eq(ProductsTable.id, Number(input.id)));
      if (!result) {
        throw new Error("Product not found");
      }
      return {
        likes: newLikes,
        dislikes: newDislikes,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }),
});

export type AppRouter = typeof appRouter;