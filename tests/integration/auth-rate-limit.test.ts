import{describe,expect,it}from"vitest";
import{consumeAuthRateLimit,resetAuthRateLimit}from"../../src/data/db/repositories";

const databaseUrl=process.env.DATABASE_URL;

describe.skipIf(!databaseUrl)("authentication rate limiting",()=>{
 it("blocks attempts after the configured threshold and resets",async()=>{
  const key=`integration-rate-limit-${Date.now()}-${Math.floor(Math.random()*100000)}`;
  try{
   for(let i=1;i<=5;i++){
    const result=await consumeAuthRateLimit(key,{limit:5,windowMs:60_000});
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(5-i);
   }
   const blocked=await consumeAuthRateLimit(key,{limit:5,windowMs:60_000});
   expect(blocked.allowed).toBe(false);
   await resetAuthRateLimit(key);
   const reset=await consumeAuthRateLimit(key,{limit:5,windowMs:60_000});
   expect(reset.allowed).toBe(true);
   expect(reset.remaining).toBe(4);
  }finally{
   await resetAuthRateLimit(key);
  }
 });
});
