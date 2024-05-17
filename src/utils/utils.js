import { redirect } from "./redirect";

export async function requireAuth({ request }) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn)
    throw redirect(
      `/login?message=You Must Login First&&redirectTo=${pathname}`
    );
  return null;
}
