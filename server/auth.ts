
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthUser } from "@shared/auth";

// In a real application, this should be stored in an environment variable
const JWT_SECRET = "wealthspire-secret-key";

export function generateToken(user: AuthUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "2h" });
}

export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch (error) {
    return null;
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  
  if (!user || !user.isAdmin) {
    return res.status(403).json({ error: "Forbidden" });
  }
  
  req.user = user;
  next();
}
