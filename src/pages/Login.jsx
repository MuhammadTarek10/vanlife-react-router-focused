/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { loginUser } from "../data/api";
import { redirect } from "../utils/redirect";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  await loginUser({ email, password });
  localStorage.setItem("loggedIn", true);

  return redirect("/host");
}

export const Login = () => {
  const message = useLoaderData();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {error && <h3>{error.message}</h3>}
      <Form method="POST" className="login-form">
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" name="password" placeholder="Enter Password" />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging..." : "Login"}
        </button>
      </Form>
    </div>
  );
};
