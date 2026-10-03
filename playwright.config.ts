import{defineConfig,devices}from"@playwright/test";
export default defineConfig({
 testDir:"./tests/e2e",
 fullyParallel:true,
 forbidOnly:!!process.env.CI,
 retries:process.env.CI?1:0,
 reporter:"list",
 use:{baseURL:"http://127.0.0.1:3000",trace:"retain-on-failure",locale:"fa-IR",colorScheme:"light"},
 projects:[
  {name:"chromium-desktop",use:{...devices["Desktop Chrome"]}},
  {name:"chromium-tablet",use:{...devices["iPad (gen 7)"]}},
  {name:"chromium-mobile",use:{...devices["Pixel 5"]}}
 ],
 webServer:{command:"npm run start",url:"http://127.0.0.1:3000",reuseExistingServer:!process.env.CI,timeout:120000}
});
