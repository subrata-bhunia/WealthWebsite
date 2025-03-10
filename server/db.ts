
import { createConnection } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create a connection and handle errors
export const getConnection = async () => {
  try {
    console.log("Attempting to connect to database...");
    return await createConnection({
      uri: process.env.DATABASE_URL
    });
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database. Please check your DATABASE_URL.");
  }
};

// Create the connection
let connection;
try {
  connection = await getConnection();
  console.log("Database connected successfully!");
} catch (error) {
  console.error("Initial database connection failed:", error);
}

// Create a Drizzle ORM instance
export const db = drizzle(connection, { schema });

// Handle unexpected disconnects
connection?.on('error', async (err) => {
  console.error('Database connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('Attempting to reconnect to database...');
    try {
      connection = await getConnection();
      console.log('Reconnected to database!');
    } catch (reconnectError) {
      console.error('Failed to reconnect:', reconnectError);
    }
  } else {
    throw err;
  }
});
