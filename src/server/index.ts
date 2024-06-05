import { publicProcedure, router } from "./trpc";
import { mockProduct, mockProducts } from "../mocks";

export const appRouter = router({
  getProducts: publicProcedure.query(async () => {
    return mockProducts;
  }),
  getProductById: publicProcedure.input((val: unknown) => {
    if (val === null || typeof val !== "number") {
      throw new Error("Expected an id");
    }
    return val;
  }).query(async (input) => {
    mockProduct.id = Number(input);
    return mockProduct;
  }),
});

export type AppRouter = typeof appRouter;