// @ts-nocheck
/* @subrata-bhunia */

import { createConnection } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}

// Parse the DATABASE_URL
const parseDatabaseUrl = (url) => {
  try {
    // Example format: mysql://user:password@host:port/database
    const regex = /mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
    const match = url.match(regex);
    
    if (!match) {
      throw new Error("Invalid DATABASE_URL format");
    }
    
    return {
      user: match[1],
      password: match[2],
      host: match[3],
      port: parseInt(match[4], 10),
      database: match[5]
    };
  } catch (error) {
    console.error("Error parsing DATABASE_URL:", error);
    throw error;
  }
};

// Create a connection and handle errors
export const getConnection = async () => {
  try {
    console.log("Attempting to connect to database...");
    const dbConfig = parseDatabaseUrl(process.env.DATABASE_URL);
    
    return await createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.database,
      connectTimeout: 10000, // 10 seconds timeout
    });
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error(
      "Failed to connect to the database. Please check your DATABASE_URL."
    );
  }
};

// Create the connection
let connection;
try {
  connection = await getConnection();
  console.log("Database connected successfully!");
} catch (error) {
  console.error("Initial database connection failed:", error);
  // Creating a fallback for development purposes
  console.log("Creating a fallback connection for development...");
  connection = null;
}

// Create a Drizzle ORM instance
export const db = connection ? drizzle(connection, { schema, mode: "default" }) : null;

// Handle unexpected disconnects
connection?.on("error", async (err) => {
  console.error("Database connection error:", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Attempting to reconnect to database...");
    try {
      connection = await getConnection();
      console.log("Reconnected to database!");
    } catch (reconnectError) {
      console.error("Failed to reconnect:", reconnectError);
    }
  } else {
    connection?.destroy();
    throw err;
  }
});
