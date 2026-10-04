import{test,expect}from"@playwright/test";
test.describe("public product smoke",()=>{
 test("Today is Persian and RTL",async({page})=>{
  await page.goto("/?lang=fa");await expect(page.locator("html")).toHaveAttribute("dir","rtl");await expect(page.getByRole("heading",{level:1})).toBeVisible();await expect(page.getByRole("heading",{level:2,name:"مناسبت‌های امروز"})).toBeVisible();
 });
 test("Calendar route renders without horizontal overflow",async({page})=>{
  await page.goto("/calendar?lang=fa&year=2465&month=5");await expect(page.getByRole("heading",{level:1})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 });
 test("Important events page respects pending editorial approval",async({page})=>{
  await page.goto("/events?lang=fa");await expect(page.getByText("هنوز رویداد ویژه‌ای برای این ماه تأیید نشده است.")).toBeVisible();
 });
 test("Unapproved historical event detail is not publicly published",async({page})=>{
  await page.goto("/events/constitutional-decree-1906?lang=fa");await expect(page.getByRole("heading",{level:1,name:"پیدا نشد"})).toBeVisible();
 });
 test("Timeline route is reachable from the public shell",async({page})=>{
  await page.goto("/timeline?lang=fa");await expect(page.getByRole("heading",{level:1})).toBeVisible();
 });
 test("Search does not expose unapproved historical events",async({page})=>{
  await page.goto("/search?lang=fa&q="+encodeURIComponent("فرمان مشروطیت"));await expect(page.locator('a[href^="/events/constitutional-decree-1906"]')).toHaveCount(0);
 });
 test("Personal route presents the auth boundary when signed out",async({page})=>{
  await page.goto("/personal?lang=fa");await expect(page.getByText(/ورود|Sign in/)).toBeVisible();
 });
 test("English locale switches the shell to LTR",async({page})=>{await page.goto("/?lang=en");await expect(page.locator("html")).toHaveAttribute("lang","en");await expect(page.locator("html")).toHaveAttribute("dir","ltr");await expect(page.locator(".app-shell")).toHaveAttribute("dir","ltr");});
 test("Theme A time and season states expose valid presentation hooks",async({page})=>{
  await page.goto("/?lang=en");
  const hero=page.locator(".hero");
  await expect(hero).toHaveAttribute("data-time-of-day",/^(morning|noon|sunset|night)$/);
  await expect(hero).toHaveAttribute("data-season",/^(spring|summer|autumn|winter)$/);
 });
 test("Mobile pages do not create unexpected horizontal overflow",async({page})=>{
  await page.setViewportSize({width:390,height:844});
  for(const path of ["/?lang=en","/calendar?lang=en&year=2465&month=5","/timeline?lang=en","/search?lang=en"]){
   await page.goto(path);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
  }
 });
 test("Accessibility landmarks remain usable",async({page})=>{
  await page.goto("/?lang=en");
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("nav")).toHaveCount(2);
  await expect(page.getByRole("heading",{level:1})).toBeVisible();
  await page.getByRole("link",{name:"Calendar"}).focus();
  await expect(page.locator(":focus-visible")).toBeVisible();
});
test("Primary navigation is keyboard reachable",async({page})=>{await page.goto("/?lang=fa");await page.keyboard.press("Tab");await expect(page.locator(":focus-visible")).toBeVisible();});
 test("PWA install prompt appears when browser exposes install capability",async({page})=>{
  await page.goto("/?lang=en");
  await page.evaluate(()=>{
    const event=Object.assign(new Event("beforeinstallprompt"),{prompt:async()=>{},userChoice:Promise.resolve({outcome:"dismissed"})});
    window.dispatchEvent(event);
  });
  await expect(page.getByRole("status")).toBeVisible();
  await expect(page.getByRole("button",{name:"Install"})).toBeVisible();
  await expect(page.getByRole("button",{name:"Later"})).toBeVisible();
  await page.getByRole("button",{name:"Later"}).click();
  await expect(page.getByRole("status")).toHaveCount(0);
});
test("PWA manifest and standard icons are exposed",async({request})=>{
  const response=await request.get("/manifest.webmanifest");expect(response.ok()).toBe(true);const manifest=await response.json();expect(manifest.name).toBe("گاه‌شمار");expect(manifest.lang).toBe("fa");expect(manifest.dir).toBe("rtl");expect(manifest.display).toBe("standalone");expect(manifest.icons.length).toBeGreaterThanOrEqual(2);for(const path of ["/icon-192.png","/icon-512.png","/sw.js"]){expect((await request.get(path)).ok()).toBe(true)}
 });
 test("Calendar day selection opens the Day Detail route",async({page})=>{
  await page.goto("/calendar?lang=fa&year=2465&month=5");
  await page.getByRole("gridcell",{name:"1",exact:true}).click();
  await expect(page).toHaveURL(/\/day\/2465\/5\/1\?lang=fa$/);
  await expect(page.getByRole("heading",{level:1})).toBeVisible();
 });
 test("Calendar swipe moves to the adjacent month",async({page})=>{
  await page.goto("/calendar?lang=en&year=2465&month=5");
  await page.dispatchEvent(".calendar-surface","touchstart",{touches:[{clientX:300}]});
  await page.dispatchEvent(".calendar-surface","touchend",{changedTouches:[{clientX:180}]});
  await expect(page).toHaveURL(/\/calendar\?lang=en&year=2465&month=6$/);
 });
 test("Calendar navigation moves between months",async({page})=>{
  await page.goto("/calendar?lang=en&year=2465&month=5");
  await page.getByRole("link",{name:"Next month"}).click();
  await expect(page).toHaveURL(/\/calendar\?lang=en&year=2465&month=6$/);
  await page.getByRole("link",{name:"Previous month"}).click();
  await expect(page).toHaveURL(/\/calendar\?lang=en&year=2465&month=5$/);
 });
 test("Search returns a stable empty state for unknown public content",async({page})=>{
  await page.goto("/search?lang=en&q="+encodeURIComponent("definitely-no-such-gah-shomar-result"));
  await expect(page.getByText("No results")).toBeVisible();
 });
 test("Day Detail exposes a public empty state for a valid empty date",async({page})=>{
  await page.goto("/day/2465/5/1?lang=en");
  await expect(page.getByRole("heading",{level:1})).toBeVisible();
  await expect(page.getByText("No results")).toBeVisible();
 });
 test("Tablet navigation stays reachable",async({page})=>{
  await page.setViewportSize({width:1024,height:768});
  await page.goto("/?lang=en");
  await expect(page.getByRole("navigation").first()).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
});
test("Mobile bottom navigation is exposed at handset width",async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.goto("/?lang=en");
  await expect(page.locator(".bottom-nav")).toBeVisible();
  await expect(page.locator(".bottom-link").filter({hasText:"Calendar"})).toBeVisible();
 });
});