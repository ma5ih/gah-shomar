import{test,expect}from"@playwright/test";
test.describe("public product smoke",()=>{
 test("Today is Persian, RTL and shows sourced content",async({page})=>{
  await page.goto("/?lang=fa");await expect(page.locator("html")).toHaveAttribute("dir","rtl");await expect(page.getByRole("heading",{level:1})).toBeVisible();await expect(page.getByRole("heading",{level:2,name:"مناسبت‌های امروز"})).toBeVisible();
 });
 test("Calendar route renders without horizontal overflow",async({page})=>{
  await page.goto("/calendar?lang=fa&year=2465&month=5");await expect(page.getByRole("heading",{level:1})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 });
 test("Event detail renders the real editorial record",async({page})=>{
  await page.goto("/events/constitutional-decree-1906?lang=fa");await expect(page.getByRole("heading",{level:1,name:"صدور فرمان مشروطیت"})).toBeVisible();await expect(page.getByText("Encyclopaedia Iranica")).toBeVisible();
 });
 test("Timeline route is reachable from the public shell",async({page})=>{
  await page.goto("/timeline?lang=fa");await expect(page.getByRole("heading",{level:1})).toBeVisible();
 });
 test("Search returns the sourced event",async({page})=>{
  await page.goto("/search?lang=fa&q="+encodeURIComponent("فرمان مشروطیت"));await expect(page.getByRole("link").filter({has:page.getByRole("heading",{name:"صدور فرمان مشروطیت"})})).toBeVisible();
 });
 test("Personal route presents the auth boundary when signed out",async({page})=>{
  await page.goto("/personal?lang=fa");await expect(page.getByText(/ورود|Sign in/)).toBeVisible();
 });
 test("English locale switches the shell to LTR",async({page})=>{await page.goto("/?lang=en");await expect(page.locator("html")).toHaveAttribute("lang","en");await expect(page.locator("html")).toHaveAttribute("dir","ltr");await expect(page.locator(".app-shell")).toHaveAttribute("dir","ltr");});
 test("Primary navigation is keyboard reachable",async({page})=>{await page.goto("/?lang=fa");await page.keyboard.press("Tab");await expect(page.locator(":focus-visible")).toBeVisible();});
 test("PWA manifest and standard icons are exposed",async({request})=>{
  const response=await request.get("/manifest.webmanifest");expect(response.ok()).toBe(true);const manifest=await response.json();expect(manifest.name).toBe("گاه‌شمار");expect(manifest.lang).toBe("fa");expect(manifest.dir).toBe("rtl");expect(manifest.display).toBe("standalone");expect(manifest.icons.length).toBeGreaterThanOrEqual(2);for(const path of ["/icon-192.png","/icon-512.png","/sw.js"]){expect((await request.get(path)).ok()).toBe(true)}
 });
});
