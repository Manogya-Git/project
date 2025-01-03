import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "attendance",
  password:"root",
  port:"3306"
  
});

const db = drizzle({ client: connection });
