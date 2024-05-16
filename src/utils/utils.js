import { redirect } from "./redirect";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) throw redirect("/login?message=You Must Login First");
  return null;
}
