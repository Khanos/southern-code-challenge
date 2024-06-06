import "./config"
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
// import { ProductsTable, CommentsTable } from "./schema";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });