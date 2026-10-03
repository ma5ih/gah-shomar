import { readFile } from "node:fs/promises";
import pg from "pg";

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is required for migrations.");
}

const sql = await readFile(new URL("../drizzle/0000_initial.sql", import.meta.url), "utf8");
const pool = new Pool({ connectionString });

try {
  await pool.query(sql);
  console.log("Database migration applied.");
} finally {
  await pool.end();
}
