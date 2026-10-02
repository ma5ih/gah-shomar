# WORKFLOW — قواعد کار روی پروژه

## شروع هر جلسه
1. STATUS
2. ROADMAP
3. CHANGELOG
4. اسناد مرتبط با TASK فعلی

## پایان هر اقدام
1. شناسه بده: ACT-XXX
2. وضعیت TASK را به‌روز کن.
3. CHANGELOG را اضافه کن.
4. STATUS را به نقطه جدید منتقل کن.
5. در صورت تصمیم جدید DECISIONS را به‌روز کن.
6. در صورت تغییر نیازمندی REQUIREMENTS را به‌روز کن.
7. اگر roadmap تغییر کرد، همان commit آن را منعکس کند.

## Commit
docs: ACT-XXX — short description
feat: TASK-XX-XXX — short description

## وضعیت‌ها
TODO / IN_PROGRESS / BLOCKED / DONE / DEPRECATED

## اصل انتقال‌پذیری
فرد یا اکانت جدید نباید برای فهمیدن وضعیت پروژه به چت قبلی نیاز داشته باشد.

## اصل atomic update
وقتی یک اقدام وضعیت پروژه را تغییر می‌دهد، فایل‌های مرتبط باید در همان تغییر به‌روزرسانی شوند تا repository وضعیت ناسازگار نشان ندهد.