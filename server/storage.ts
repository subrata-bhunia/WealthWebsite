import { InsertContact, contacts, InsertBlog, blogs } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";
import "dotenv/config";
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const db = drizzle(pool);

export const storage = {
  // Contact functions
  createContact: async (contact: InsertContact) => {
    const result = await db.insert(contacts).values(contact).returning();
    return result[0];
  },
  getAllContacts: async () => {
    return await db.select().from(contacts);
  },

  // Blog functions
  createBlog: async (blog: InsertBlog) => {
    const result = await db.insert(blogs).values(blog).returning();
    return result[0];
  },
  getAllBlogs: async () => {
    return await db.select().from(blogs);
  },
  getBlogById: async (id: number) => {
    const result = await db
      .select()
      .from(blogs)
      .where(sql`${blogs.id} = ${id}`);
    return result[0];
  },
  deleteBlog: async (id: number) => {
    await db.delete(blogs).where(sql`${blogs.id} = ${id}`);
    return { success: true };
  },
};
