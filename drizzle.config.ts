import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "cloud2.defaultserver.net",
    port: 3306,
    user: "xqdjzboa_wealth",
    password: "admin1234",
    database: "xqdjzboa_wealth",
  },
});
