import { redirect } from "./redirect";

export async function requireAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) throw redirect("/login?message=You Must Login First");
  return null;
}
