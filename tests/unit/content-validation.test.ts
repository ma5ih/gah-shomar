import{describe,expect,it}from"vitest";
import{seedPublicContent}from"../../src/content/seed";
import{validatePublicContent}from"../../src/content/validation";
describe("editorial seed",()=>{
 it("contains sourced non-demo public content",()=>{expect(seedPublicContent.events.length).toBeGreaterThanOrEqual(5);expect(seedPublicContent.people.length).toBeGreaterThanOrEqual(4);expect(seedPublicContent.sources.length).toBeGreaterThanOrEqual(5);expect(JSON.stringify(seedPublicContent)).not.toContain("source-demo-1")});
 it("has a valid relationship graph",()=>{const result=validatePublicContent(seedPublicContent);expect(result.valid).toBe(true);expect(result.issues).toEqual([])});
 it("keeps every published event source-backed",()=>{for(const event of seedPublicContent.events){expect(event.sourceIds.length).toBeGreaterThan(0);for(const sourceId of event.sourceIds)expect(seedPublicContent.sources.some(source=>source.id===sourceId)).toBe(true)}});
});