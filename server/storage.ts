import { InferModel } from "drizzle-orm";
import { db } from "./db";
import { blogs, contacts, mediaItems, offers } from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Offer methods
  async createOffer(offerData: InferModel<typeof offers, "insert">) {
    try {
      const result = await db.insert(offers).values(offerData);
      return { id: result[0].insertId, ...offerData };
    } catch (error) {
      console.error("Error creating offer:", error);
      throw new Error("Failed to create offer");
    }
  },

  async getAllOffers() {
    try {
      return await db.select().from(offers).orderBy(offers.createdAt);
    } catch (error) {
      console.error("Error fetching offers:", error);
      throw new Error("Failed to fetch offers");
    }
  },

  async getOfferById(id: number) {
    //db.select().from(blogs).where(eq(blogs.id, id))
    try {
      const result = await db.select().from(offers).where(eq(offers.id, id));
      return result[0] || null;
    } catch (error) {
      console.error(`Error fetching offer with id ${id}:`, error);
      throw new Error(`Failed to fetch offer with id ${id}`);
    }
  },

  async updateOffer(
    id: number,
    offerData: InferModel<typeof offers, "insert">,
  ) {
    try {
      await db.update(offers).set(offerData).where(eq(offers.id, id));
      return { id, ...offerData };
    } catch (error) {
      console.error(`Error updating offer with id ${id}:`, error);
      throw new Error(`Failed to update offer with id ${id}`);
    }
  },

  async deleteOffer(id: number) {
    try {
      await db.delete(offers).where(offers.id.equals(id));
    } catch (error) {
      console.error(`Error deleting offer with id ${id}:`, error);
      throw new Error(`Failed to delete offer with id ${id}`);
    }
  },

  // Contact methods
  async createContact(contact: InferModel<typeof contacts, "insert">) {
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

  async createBlog(blog: InferModel<typeof blogs, "insert">) {
    try {
      const result = await db.insert(blogs).values({
        ...blog,
        createdAt: new Date().toISOString(),
      });
      return {
        id: result[0].insertId,
        ...blog,
        createdAt: new Date().toISOString(),
      };
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

  async createMediaItem(mediaItem: InferModel<typeof mediaItems, "insert">) {
    try {
      const result = await db.insert(mediaItems).values({
        ...mediaItem,
        createdAt: new Date().toISOString(),
      });
      return {
        id: result[0].insertId,
        ...mediaItem,
        createdAt: new Date().toISOString(),
      };
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
      const results = await db
        .select()
        .from(mediaItems)
        .where(eq(mediaItems.id, id));
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
  },

  async updateBlog(id: number, blogUpdate: InferModel<typeof blogs, "insert">) {
    try {
      await db
        .update(blogs)
        .set({
          ...blogUpdate,
          // Don't update the creation date
        })
        .where(eq(blogs.id, id));

      // Return the updated blog
      const results = await db.select().from(blogs).where(eq(blogs.id, id));
      return results[0] || null;
    } catch (error) {
      console.error("Error updating blog:", error);
      throw error;
    }
  },

  async updateMediaItem(
    id: number,
    mediaUpdate: InferModel<typeof mediaItems, "insert">,
  ) {
    try {
      await db
        .update(mediaItems)
        .set({
          ...mediaUpdate,
          // Don't update the creation date
        })
        .where(eq(mediaItems.id, id));

      // Return the updated media item
      const results = await db
        .select()
        .from(mediaItems)
        .where(eq(mediaItems.id, id));
      return results[0] || null;
    } catch (error) {
      console.error("Error updating media item:", error);
      throw error;
    }
  },
};
