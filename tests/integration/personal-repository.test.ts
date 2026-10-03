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
 it("keeps linked personal people inside the owning account boundary",async()=>{
  const suffix=`1791058945424_${Math.floor(Math.random()*100000)}`;
  const owner=await userRepository.createUser({username:`owner_${suffix}`,normalizedUsername:`owner_${suffix}`,passwordHash:"test"});
  const other=await userRepository.createUser({username:`other_${suffix}`,normalizedUsername:`other_${suffix}`,passwordHash:"test"});
  const person=await personalRepository.createPerson(owner.id,{name:"Private person"});
  const created=await personalRepository.createEvent(owner.id,{type:"birthday",title:"Birthday",date:{year:2585,month:7,day:11},personalPersonId:person.id,recurrence:{frequency:"yearly",interval:1}});
  expect(created.personalPersonId).toBe(person.id);
  expect((await personalRepository.listPeople(other.id)).some(item=>item.id===person.id)).toBe(false);
 });
});
