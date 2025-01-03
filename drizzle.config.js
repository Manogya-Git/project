// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql", // Change dialect to 'mysql' for MySQL
  schema: "./utils/schema.js", // Ensure this path points to your schema file
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "root", // Use your actual MySQL password here
    database: "attendance", // Replace with your database name
    port: 3306, // Default MySQL port
  },
});
