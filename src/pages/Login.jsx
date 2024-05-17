/* eslint-disable react-refresh/only-export-components */
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../data/api";
import { redirect } from "../utils/redirect";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const pathname = new URL(request.url).searchParams.get("redirectTo");

  try {
    await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);

    return redirect(pathname ?? "host");
  } catch (e) {
    return e.message;
  }
}

export const Login = () => {
  const message = useLoaderData();
  const { state } = useNavigation();
  const errorMessage = useActionData();

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      <Form method="POST" className="login-form" replace>
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging..." : "Login"}
        </button>
      </Form>
    </div>
  );
};
