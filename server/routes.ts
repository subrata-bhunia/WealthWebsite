import type { Express, Request } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBlogSchema, insertMediaSchema } from "@shared/schema";
import { generateToken, requireAdmin } from "./auth";
import { LoginCredentials } from "@shared/auth";

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function registerRoutes(app: Express) {
  // Store registered admins (in memory for simplicity)
  const registeredAdmins: { username: string; password: string }[] = [
    { username: "admin", password: "admin123" } // Default admin
  ];

  // Auth routes
  app.post("/api/register", (req, res) => {
    try {
      const { username, password } = req.body as LoginCredentials;
      
      // Check if username already exists
      if (registeredAdmins.some(admin => admin.username === username)) {
        return res.status(400).json({ error: "Username already exists" });
      }
      
      // Register new admin
      registeredAdmins.push({ username, password });
      console.log("Admin registered:", username);
      
      res.json({ success: true, message: "Admin registered successfully" });
    } catch (error) {
      res.status(400).json({ error: "Invalid registration data" });
    }
  });

  app.post("/api/login", (req, res) => {
    try {
      const { username, password } = req.body as LoginCredentials;
      
      // Find admin in the registered list
      const admin = registeredAdmins.find(
        admin => admin.username === username && admin.password === password
      );
      
      if (admin) {
        const user = { username, isAdmin: true };
        const token = generateToken(user);
        res.json({ token, user });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid login data" });
    }
  });

  // Contact routes
  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  app.get("/api/contacts", requireAdmin, async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Error fetching contacts" });
    }
  });

  // Blog routes
  app.post("/api/blogs", requireAdmin, async (req, res) => {
    try {
      const blog = insertBlogSchema.parse(req.body);
      const result = await storage.createBlog(blog);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog data" });
    }
  });

  app.get("/api/blogs", async (req, res) => {
    try {
      const blogs = await storage.getAllBlogs();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: "Error fetching blogs" });
    }
  });

  app.get("/api/blogs/:id", async (req, res) => {
    try {
      const blog = await storage.getBlogById(parseInt(req.params.id));
      if (blog) {
        res.json(blog);
      } else {
        res.status(404).json({ error: "Blog not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching blog" });
    }
  });

  app.delete("/api/blogs/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteBlog(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Error deleting blog" });
    }
  });

  // Media routes
  app.post("/api/media", requireAdmin, async (req, res) => {
    try {
      const mediaItem = insertMediaSchema.parse(req.body);
      const result = await storage.createMediaItem(mediaItem);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid media data" });
    }
  });

  app.get("/api/media", async (req, res) => {
    try {
      const mediaItems = await storage.getAllMediaItems();
      res.json(mediaItems);
    } catch (error) {
      res.status(500).json({ error: "Error fetching media items" });
    }
  });

  app.get("/api/media/:id", async (req, res) => {
    try {
      const mediaItem = await storage.getMediaItemById(parseInt(req.params.id));
      if (mediaItem) {
        res.json(mediaItem);
      } else {
        res.status(404).json({ error: "Media item not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching media item" });
    }
  });

  app.delete("/api/media/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deleteMediaItem(parseInt(req.params.id));
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Error deleting media item" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
