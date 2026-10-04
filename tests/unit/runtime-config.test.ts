import{describe,expect,it}from"vitest";
import{getProductionConfig,getRuntimeConfig}from"../../src/application/runtime-config";
const base={NODE_ENV:"test",APP_URL:"http://localhost:3000",APP_TIMEZONE:"Asia/Tehran"};
describe("runtime configuration",()=>{
 it("normalizes a valid test configuration",()=>{expect(getRuntimeConfig({env:{...base,DATABASE_URL:"postgresql://localhost/gah"}})).toEqual({nodeEnv:"test",appUrl:"http://localhost:3000",appTimezone:"Asia/Tehran",databaseUrl:"postgresql://localhost/gah"});});
 it("rejects malformed values",()=>{expect(()=>getRuntimeConfig({env:{...base,APP_URL:"not-a-url"}})).toThrow("APP_URL");expect(()=>getRuntimeConfig({env:{...base,APP_TIMEZONE:"Not/A_Timezone"}})).toThrow("APP_TIMEZONE");expect(()=>getRuntimeConfig({env:{...base,DATABASE_URL:"mysql://localhost/gah"},requireDatabase:true})).toThrow("DATABASE_URL");});
 it("enforces the production contract",()=>{expect(()=>getProductionConfig({...base,DATABASE_URL:"postgresql://localhost/gah"})).toThrow("NODE_ENV");expect(()=>getProductionConfig({NODE_ENV:"production",APP_URL:"https://example.test",APP_TIMEZONE:"Asia/Tehran"})).toThrow("DATABASE_URL");expect(()=>getProductionConfig({NODE_ENV:"production",APP_URL:"https://example.test",APP_TIMEZONE:"Asia/Tehran",DATABASE_URL:"postgresql://localhost/gah"})).not.toThrow();});
});
