import { mysqlTable, int, text, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = mysqlTable("contacts", {
  id: int("id").primaryKey().autoincrement(),
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

export const blogs = mysqlTable("blogs", {
  id: int("id").primaryKey().autoincrement(),
  title: text("title").notNull(),
  short_desc: varchar("short_desc").notNull(),
  content: text("content").notNull(),
  authorName: text("author_name").notNull(),
  image: text("image"),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertBlogSchema = createInsertSchema(blogs).pick({
  title: true,
  short_desc: true,
  content: true,
  authorName: true,
  image: true,
});

export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = z.infer<typeof insertBlogSchema>;

export const mediaItems = mysqlTable("media_items", {
  id: int("id").primaryKey().autoincrement(),
  title: text("title").notNull(),
  description: text("description"),
  fileUrl: text("file_url"),
  youtubeUrl: text("youtube_url"),
  mediaType: varchar("media_type", { length: 20 }).notNull(), // 'file', 'youtube', or 'both'
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertMediaSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(), // This will now accept HTML content
  fileUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
  mediaType: z.enum(["file", "youtube", "both"]),
});

export type MediaItem = typeof mediaItems.$inferSelect;
export type InsertMediaItem = z.infer<typeof insertMediaSchema>;

export const offers = mysqlTable("offers", {
  id: int("id").primaryKey().autoincrement(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: varchar("category", { length: 50 }).notNull(), // e.g., 'lease', 'loan', etc.
  discount: varchar("discount", { length: 50 }),
  validUntil: text("valid_until"),
  image: text("image"),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertOfferSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  discount: z.string().optional(),
  validUntil: z.string().optional(),
  image: z.string().optional(),
});

export type Offer = typeof offers.$inferSelect;
export type InsertOffer = z.infer<typeof insertOfferSchema>;
