import { describe, expect, it } from "vitest";
import pg from "pg";

const { Pool } = pg;
const databaseUrl = process.env.DATABASE_URL;

describe.skipIf(!databaseUrl)("database schema", () => {
  it("contains the core account and personal tables", async () => {
    const pool = new Pool({ connectionString: databaseUrl });
    try {
      const result = await pool.query<{ table_name: string }>(
        "select table_name from information_schema.tables where table_schema = 'public' and table_name in ('users','sessions','personal_people','personal_events','memories') order by table_name",
      );
      expect(result.rows.map((row) => row.table_name)).toEqual([
        "memories",
        "personal_events",
        "personal_people",
        "sessions",
        "users",
      ]);
    } finally {
      await pool.end();
    }
  });
});
