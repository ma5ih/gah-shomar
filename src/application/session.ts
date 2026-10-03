import { cookies } from "next/headers";
import { validateSessionToken } from "./auth";

export const SESSION_COOKIE = "gah_shomar_session";

export async function getCurrentSession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return validateSessionToken(token);
}
