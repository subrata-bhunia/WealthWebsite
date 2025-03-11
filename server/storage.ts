
import { db } from "./db";
import { blogs, contacts, mediaItems, type InsertBlog, type InsertContact, type InsertMediaItem } from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  async createContact(contact: InsertContact) {
    try {
      const result = await db.insert(contacts).values(contact);
      return { id: result[0].insertId, ...contact };
    } catch (error) {
      console.error("Error creating contact:", error);
      throw error;
    }
  },

  async getAllContacts() {
    try {
      return await db.select().from(contacts);
    } catch (error) {
      console.error("Error getting contacts:", error);
      throw error;
    }
  },

  async createBlog(blog: InsertBlog) {
    try {
      const result = await db.insert(blogs).values({
        ...blog,
        createdAt: new Date().toISOString()
      });
      return { id: result[0].insertId, ...blog, createdAt: new Date().toISOString() };
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  },

  async getAllBlogs() {
    try {
      return await db.select().from(blogs);
    } catch (error) {
      console.error("Error getting blogs:", error);
      throw error;
    }
  },

  async getBlogById(id: number) {
    try {
      const results = await db.select().from(blogs).where(eq(blogs.id, id));
      return results[0] || null;
    } catch (error) {
      console.error("Error getting blog by id:", error);
      throw error;
    }
  },

  async deleteBlog(id: number) {
    try {
      await db.delete(blogs).where(eq(blogs.id, id));
      return { success: true };
    } catch (error) {
      console.error("Error deleting blog:", error);
      throw error;
    }
  },

  async createMediaItem(mediaItem: InsertMediaItem) {
    try {
      const result = await db.insert(mediaItems).values({
        ...mediaItem,
        createdAt: new Date().toISOString()
      });
      return { id: result[0].insertId, ...mediaItem, createdAt: new Date().toISOString() };
    } catch (error) {
      console.error("Error creating media item:", error);
      throw error;
    }
  },

  async getAllMediaItems() {
    try {
      return await db.select().from(mediaItems);
    } catch (error) {
      console.error("Error getting media items:", error);
      throw error;
    }
  },

  async getMediaItemById(id: number) {
    try {
      const results = await db.select().from(mediaItems).where(eq(mediaItems.id, id));
      return results[0] || null;
    } catch (error) {
      console.error("Error getting media item by id:", error);
      throw error;
    }
  },

  async deleteMediaItem(id: number) {
    try {
      await db.delete(mediaItems).where(eq(mediaItems.id, id));
      return { success: true };
    } catch (error) {
      console.error("Error deleting media item:", error);
      throw error;
    }
  }
};
