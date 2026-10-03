import{describe,expect,it}from"vitest";
import manifest from"../../app/manifest";
describe("PWA baseline",()=>{
 it("exposes an installable Persian manifest",()=>{const m=manifest();expect(m.name).toBe("گاه‌شمار");expect(m.display).toBe("standalone");expect(m.lang).toBe("fa");expect(m.dir).toBe("rtl");expect(m.start_url).toBe("/?lang=fa");expect(m.icons?.length).toBeGreaterThan(0)});
});