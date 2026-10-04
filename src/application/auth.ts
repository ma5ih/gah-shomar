import {randomBytes} from "node:crypto";import {hashPassword,hashSessionToken,normalizeUsername,userRepository,validatePassword,validateUsername,verifyPassword,consumeAuthRateLimit,resetAuthRateLimit} from "../data/db/repositories";import {ValidationError} from "../shared/errors";

export function normalizeUserInput(username:string){const clean=username.trim();validateUsername(clean);return normalizeUsername(clean)}

export async function register(input:{username:string;password:string}){
 const username=input.username.trim();
 const normalizedUsername=normalizeUserInput(username);
 validatePassword(input.password);
 const rate=await consumeAuthRateLimit(`auth:${normalizedUsername}`);
 if(!rate.allowed)throw new ValidationError("Too many authentication attempts. Try again shortly.");
 if(await userRepository.findByNormalizedUsername(normalizedUsername))throw new ValidationError("Username is already in use.");
 const user=await userRepository.createUser({username,normalizedUsername,passwordHash:await hashPassword(input.password)});
 await resetAuthRateLimit(`auth:${normalizedUsername}`);
 return createSessionForUser(user.id);
}

export async function login(input:{username:string;password:string}){
 const normalizedUsername=normalizeUserInput(input.username);
 const rate=await consumeAuthRateLimit(`auth:${normalizedUsername}`);
 if(!rate.allowed)throw new ValidationError("Too many authentication attempts. Try again shortly.");
 const user=await userRepository.findByNormalizedUsername(normalizedUsername);
 if(!user||!(await verifyPassword(input.password,user.passwordHash)))throw new ValidationError("Invalid username or password.");
 await resetAuthRateLimit(`auth:${normalizedUsername}`);
 return createSessionForUser(user.id);
}

async function createSessionForUser(userId:string){
 const token=randomBytes(32).toString("base64url");
 await userRepository.createSession(userId,hashSessionToken(token));
 return{token,userId};
}

export async function validateSessionToken(token:string){if(!token)return null;const s=await userRepository.getActiveSessionByTokenHash(hashSessionToken(token));return s?{userId:s.userId,sessionId:s.id}:null}
export async function logout(sessionId:string){if(sessionId)await userRepository.revokeSession(sessionId)}
