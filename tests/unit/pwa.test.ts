import{readFileSync}from"node:fs";
import{resolve}from"node:path";
import{describe,expect,it}from"vitest";
import manifest from"../../app/manifest";

describe("PWA baseline",()=>{
 it("exposes an installable Persian manifest",()=>{
  const m=manifest();
  expect(m.name).toBe("گاه‌شمار");
  expect(m.display).toBe("standalone");
  expect(m.lang).toBe("fa");
  expect(m.dir).toBe("rtl");
  expect(m.start_url).toBe("/?lang=fa");
  expect(m.icons?.length).toBeGreaterThan(0);
 });
 it("contains a real browser install prompt contract",()=>{
  const source=readFileSync(resolve(process.cwd(),"src/frontend/components/pwa-install-prompt.tsx"),"utf8");
  expect(source).toContain("beforeinstallprompt");
  expect(source).toContain("appinstalled");
  expect(source).toContain("localStorage");
  expect(source).toContain("prompt()");
 });
});
