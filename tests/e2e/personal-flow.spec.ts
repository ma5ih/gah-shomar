import{test,expect}from"@playwright/test";

test("signed-in user can create a private event and find it through personal search",async({page})=>{
 const username=`e2e_${Date.now()}_${Math.floor(Math.random()*100000)}`;
 await page.goto("/register?lang=fa");
 await page.getByLabel("نام کاربری").fill(username);
 await page.getByLabel("رمز عبور").fill("TestPassword123!");
 await page.getByRole("button",{name:"ثبت‌نام"}).click();
 await expect(page.getByText("وارد شدی. بخش شخصی را باز کن.")).toBeVisible();

 await page.goto("/personal?lang=fa");
 await expect(page.getByRole("heading",{name:"افزودن رویداد شخصی"})).toBeVisible();

 const eventForm=page.locator("form").filter({has:page.getByRole("heading",{name:"افزودن رویداد شخصی"})});
 await eventForm.getByLabel("عنوان").fill("رویداد تست خصوصی");
 await eventForm.getByLabel("نوع").selectOption("custom");
 await eventForm.getByLabel("سال",{exact:true}).fill("2585");
 await eventForm.getByLabel("ماه",{exact:true}).fill("7");
 await eventForm.getByLabel("روز",{exact:true}).fill("11");
 await eventForm.getByRole("button",{name:"ذخیره"}).click();

 await page.goto("/personal?lang=fa");
 await expect(page.getByText("رویداد تست خصوصی")).toBeVisible();

 await page.goto("/search?lang=fa&q="+encodeURIComponent("رویداد تست خصوصی"));
 await expect(page.getByText("رویداد تست خصوصی")).toBeVisible();

 await page.goto("/personal?lang=fa");
 await page.getByRole("button",{name:"خروج"}).click();
 await page.goto("/personal?lang=fa");
 await expect(page.getByText("برای نگهداری رویدادها و خاطرات شخصی وارد حساب شو.")).toBeVisible();
});
