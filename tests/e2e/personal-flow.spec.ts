import{test,expect}from"@playwright/test";

test("signed-in user can create a private event with linked person and notes and find it through personal search",async({page})=>{
 const username=`e2e_${Date.now()}_${Math.floor(Math.random()*100000)}`;
 await page.goto("/register?lang=fa");
 await page.getByLabel("نام کاربری").fill(username);
 await page.getByLabel("رمز عبور").fill("TestPassword123!");
 await page.getByRole("button",{name:"ثبت‌نام"}).click();
 await expect(page.getByText("وارد شدی. بخش شخصی را باز کن.")).toBeVisible();

 await page.goto("/personal?lang=fa");
 await expect(page.getByRole("heading",{name:"افزودن رویداد شخصی"})).toBeVisible();

 const peopleCard=page.locator("section.card.detail-card").filter({has:page.getByRole("heading",{name:"افراد شخصی"})});
 const peopleForm=peopleCard.locator("form").filter({has:page.getByRole("button",{name:"افزودن شخص"})});
 await peopleForm.getByLabel("نام",{exact:true}).fill("شخص تست");
 await peopleForm.getByRole("button",{name:"افزودن شخص"}).click();
 await page.reload();

 const eventForm=page.locator("form").filter({has:page.getByRole("heading",{name:"افزودن رویداد شخصی"})});
 await eventForm.getByLabel("عنوان").fill("رویداد تست خصوصی");
 await eventForm.getByLabel("نوع").selectOption("birthday");
 await eventForm.getByLabel("سال",{exact:true}).fill("2585");
 await eventForm.getByLabel("ماه",{exact:true}).fill("7");
 await eventForm.getByLabel("روز",{exact:true}).fill("11");
 await eventForm.getByLabel("نام",{exact:true}).selectOption({label:"شخص تست"});
 await eventForm.getByLabel("یادداشت",{exact:true}).fill("یادداشت ایجاد تست");
 await Promise.all([page.waitForResponse(response=>response.request().method()==="POST"&&response.url().includes("/personal?lang=fa")),eventForm.getByRole("button",{name:"ذخیره"}).click()]);

 await page.goto("/personal?lang=fa");
 const savedEvent=page.locator("article.card.detail-card").filter({has:page.locator('input[name="title"][value="رویداد تست خصوصی"]')});
 await expect(savedEvent.locator('textarea[name="notes"]')).toHaveValue("یادداشت ایجاد تست");
 await expect(savedEvent.locator('select[name="personalPersonId"] option:checked')).toHaveText("شخص تست");
 await expect(savedEvent.locator('input[name="title"]')).toHaveValue("رویداد تست خصوصی");
 await expect(savedEvent.locator('input[name="recurrence"]')).toBeChecked();

 await page.goto("/search?lang=fa&q="+encodeURIComponent("رویداد تست خصوصی"));
 await expect(page.getByText("رویداد تست خصوصی")).toBeVisible();

 await page.goto("/personal?lang=fa");
 await page.getByRole("button",{name:"خروج"}).click();
 await page.goto("/personal?lang=fa");
 await expect(page.getByText("برای نگهداری رویدادها و خاطرات شخصی وارد حساب شو.")).toBeVisible();
});
