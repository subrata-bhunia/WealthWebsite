
import { db } from "./db";
import { sql } from "drizzle-orm";

async function createOffersTable() {
  console.log("Creating offers table...");
  
  try {
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS offers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(50) NOT NULL,
        discount VARCHAR(100),
        valid_until DATE,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log("Offers table created successfully!");
  } catch (error) {
    console.error("Error creating offers table:", error);
  }
}

// Run the migration
createOffersTable()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  });
