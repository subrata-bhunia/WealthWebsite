
import { createConnection } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create a MySQL connection pool
export const connection = await createConnection({
  uri: process.env.DATABASE_URL
});

// Create a Drizzle ORM instance
export const db = drizzle(connection, { schema });
