import{readFileSync}from"node:fs";
import{resolve}from"node:path";
import{describe,expect,it}from"vitest";

const css=readFileSync(resolve(process.cwd(),"src/frontend/themes/flat-geometric/theme.css"),"utf8");

describe("Theme A visual contract",()=>{
 it("keeps the approved flat geometric visual constraints",()=>{
  expect(css).toContain('html[data-theme="flat-geometric"]');
  expect(css).toContain("--fg-space-1:4px");
  expect(css).toContain("--fg-space-7:32px");
  expect(css).not.toMatch(/gradient\s*\(/i);
  expect(css).not.toContain("backdrop-filter:blur");
 });
 it("defines all visual refinement task contracts",()=>{
  for(const marker of [
   "TASK-07-003","TASK-07-004","TASK-07-005","TASK-07-006..009",
   "TASK-07-010","TASK-07-011","TASK-07-013"
  ])expect(css).toContain(marker);
 });
 it("covers every time-of-day and season state",()=>{
  for(const state of ["morning","noon","sunset","night"])expect(css).toContain(`data-time-of-day="${state}"`);
  for(const season of ["spring","summer","autumn","winter"])expect(css).toContain(`data-season="${season}"`);
  expect(css).toContain("prefers-reduced-motion:reduce");
 });
});
