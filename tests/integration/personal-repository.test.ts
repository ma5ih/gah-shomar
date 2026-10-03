import{describe,expect,it}from"vitest";
import{personalRepository,userRepository}from"../../src/data/db/repositories";

const databaseUrl=process.env.DATABASE_URL;

describe.skipIf(!databaseUrl)("personal event persistence",()=>{
 it("creates and reads an event for its owner",async()=>{
  const username=`integration_${Date.now()}_${Math.floor(Math.random()*100000)}`;
  const user=await userRepository.createUser({username,normalizedUsername:username.toLowerCase(),passwordHash:"test"});
  const created=await personalRepository.createEvent(user.id,{type:"custom",title:"Integration private event",date:{year:2585,month:7,day:11},notes:"test"});
  const events=await personalRepository.listEvents(user.id);
  expect(events.some(event=>event.id===created.id&&event.title==="Integration private event")).toBe(true);
  expect(events.every(event=>event.ownerUserId===user.id)).toBe(true);
 });
});
