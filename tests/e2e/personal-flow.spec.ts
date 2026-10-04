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
 await expect(savedEvent.getByRole("button",{name:"اشتراک‌گذاری کارت"})).toBeVisible();
 const [download]=await Promise.all([
  page.waitForEvent("download"),
  savedEvent.getByRole("button",{name:"اشتراک‌گذاری کارت"}).click()
 ]);
 await expect(download.suggestedFilename()).toBe("gah-shomar-share.png");

 await page.goto("/search?lang=fa&q="+encodeURIComponent("رویداد تست خصوصی"));
 await expect(page.getByText("رویداد تست خصوصی")).toBeVisible();

 await page.goto("/personal?lang=fa");
 await page.getByRole("button",{name:"خروج"}).click();
 await expect(page.getByText("برای نگهداری رویدادها و خاطرات شخصی وارد حساب شو.")).toBeVisible();
});

test("English personal flow exposes LTR labels and authenticated create state",async({page})=>{
 const username=`e2e_en_${Date.now()}_${Math.floor(Math.random()*100000)}`;
 await page.goto("/register?lang=en");
 await expect(page.locator("html")).toHaveAttribute("lang","en");
 await expect(page.locator("html")).toHaveAttribute("dir","ltr");
 await page.getByLabel("Username").fill(username);
 await page.getByLabel("Password").fill("TestPassword123!");
 await page.getByRole("button",{name:"Sign up"}).click();
 await expect(page.getByText("Signed in. Open Personal.")).toBeVisible();

 await page.goto("/personal?lang=en");
 await expect(page.getByRole("heading",{name:"Add personal event"})).toBeVisible();
 const form=page.locator("form").filter({has:page.getByRole("heading",{name:"Add personal event"})});
 await form.getByLabel("Title").fill("English browser event");
 await form.getByLabel("Type").selectOption("custom");
 await form.getByLabel("Year",{exact:true}).fill("2585");
 await form.getByLabel("Month",{exact:true}).fill("7");
 await form.getByLabel("Day",{exact:true}).fill("12");
 await form.getByLabel("Notes",{exact:true}).fill("English acceptance");
 await form.getByRole("button",{name:"Save"}).click();
 await expect(page.locator('input[name="title"][value="English browser event"]')).toBeVisible();
});

test("yearly recurrence can be enabled and cleared through the browser",async({page})=>{
 const username=`e2e_recur_${Date.now()}_${Math.floor(Math.random()*100000)}`;
 await page.goto("/register?lang=fa");
 await page.getByLabel("نام کاربری").fill(username);
 await page.getByLabel("رمز عبور").fill("TestPassword123!");
 await page.getByRole("button",{name:"ثبت‌نام"}).click();
 await expect(page.getByText("وارد شدی. بخش شخصی را باز کن.")).toBeVisible();
 await page.goto("/personal?lang=fa");

 const form=page.locator("form").filter({has:page.getByRole("heading",{name:"افزودن رویداد شخصی"})});
 await form.getByLabel("عنوان").fill("تست تکرار سالانه");
 await form.getByLabel("نوع").selectOption("custom");
 await form.getByLabel("سال",{exact:true}).fill("2585");
 await form.getByLabel("ماه",{exact:true}).fill("7");
 await form.getByLabel("روز",{exact:true}).fill("13");
 await form.getByLabel("هر سال").check();
 await form.getByRole("button",{name:"ذخیره"}).click();

 const saved=page.locator("article.card.detail-card").filter({has:page.locator('input[name="title"][value="تست تکرار سالانه"]')});
 await expect(saved.locator('input[name="recurrence"]')).toBeChecked();

 await saved.locator('input[name="recurrence"]').uncheck();
 await saved.getByRole("button",{name:"ذخیرهٔ تغییرات"}).click();
 await expect(saved.locator('input[name="recurrence"]')).not.toBeChecked();
});

test("memory CRUD is available in the authenticated personal browser flow",async({page})=>{
 const username=`e2e_memory_${Date.now()}_${Math.floor(Math.random()*100000)}`;
 await page.goto("/register?lang=fa");
 await page.getByLabel("نام کاربری").fill(username);
 await page.getByLabel("رمز عبور").fill("TestPassword123!");
 await page.getByRole("button",{name:"ثبت‌نام"}).click();
 await expect(page.getByText("وارد شدی. بخش شخصی را باز کن.")).toBeVisible();
 await page.goto("/personal?lang=fa");

 const form=page.locator("form").filter({has:page.getByRole("heading",{name:"ثبت خاطره"})});
 await form.getByLabel("عنوان",{exact:true}).fill("خاطره تست مرورگر");
 await form.getByLabel("یادداشت",{exact:true}).fill("متن خاطره تست");
 await form.getByLabel("سال",{exact:true}).fill("2585");
 await form.getByLabel("ماه",{exact:true}).fill("7");
 await form.getByLabel("روز",{exact:true}).fill("14");
 await form.getByRole("button",{name:"ذخیره"}).click();

 const saved=page.locator("article.card.detail-card").filter({has:page.locator('input[name="title"][value="خاطره تست مرورگر"]')});
 await expect(saved.locator('textarea[name="text"]')).toHaveValue("متن خاطره تست");

 await saved.locator('textarea[name="text"]').fill("متن خاطره ویرایش شد");
 await saved.getByRole("button",{name:"ذخیرهٔ تغییرات"}).click();
 await expect(saved.locator('textarea[name="text"]')).toHaveValue("متن خاطره ویرایش شد");

 await saved.getByRole("button",{name:"حذف"}).click();
 await expect(page.locator('input[name="title"][value="خاطره تست مرورگر"]')).toHaveCount(0);
});