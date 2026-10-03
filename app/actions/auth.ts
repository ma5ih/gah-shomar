"use server";
import { cookies } from "next/headers";
import { register, login, logout as revokeSession } from "@/application/auth";
import { getCurrentSession, SESSION_COOKIE } from "@/application/session";
export type AuthActionState={error?:string;success?:boolean};
const cookieOptions={httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax" as const,path:"/"};
export async function signInAction(_:AuthActionState,formData:FormData):Promise<AuthActionState>{try{const result=await login({username:String(formData.get("username")??""),password:String(formData.get("password")??"")});(await cookies()).set(SESSION_COOKIE,result.token,cookieOptions);return{success:true}}catch(error){return{error:error instanceof Error?error.message:"Login failed."}}}
export async function signUpAction(_:AuthActionState,formData:FormData):Promise<AuthActionState>{try{const result=await register({username:String(formData.get("username")??""),password:String(formData.get("password")??"")});(await cookies()).set(SESSION_COOKIE,result.token,cookieOptions);return{success:true}}catch(error){return{error:error instanceof Error?error.message:"Registration failed."}}}
export async function signOutAction(){const session=await getCurrentSession();if(session)await revokeSession(session.sessionId);(await cookies()).delete(SESSION_COOKIE);}
