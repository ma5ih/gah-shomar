import {readdir,readFile} from "node:fs/promises";
import pg from "pg";

const {Pool}=pg;
const connectionString=process.env.DATABASE_URL;
if(!connectionString)throw new Error("DATABASE_URL is required for migrations.");

const drizzleDir=new URL("../drizzle/",import.meta.url);
const files=(await readdir(drizzleDir))
  .filter(file=>file.endsWith(".sql"))
  .sort();

if(!files.length)throw new Error("No SQL migrations found.");

const pool=new Pool({connectionString});
try{
 for(const file of files){
  const sql=await readFile(new URL(file,drizzleDir),"utf8");
  await pool.query(sql);
  console.log(`Migration applied: ${file}`);
 }
}finally{
 await pool.end();
}