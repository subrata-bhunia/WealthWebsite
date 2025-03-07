import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  message: text("message").notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  authorName: text("author_name").notNull(),
  image: text("image"),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertBlogSchema = createInsertSchema(blogs).pick({
  title: true,
  content: true,
  authorName: true,
});

export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = z.infer<typeof insertBlogSchema>;
