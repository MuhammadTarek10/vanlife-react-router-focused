import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../data/api";

// eslint-disable-next-line react-refresh/only-export-components
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export const Login = () => {
  const message = useLoaderData();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => console.log(data))
      .catch((e) => setError(e))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {error && <h3>{error.message}</h3>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginFormData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginFormData.password}
          onChange={handleChange}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging..." : "Login"}
        </button>
      </form>
    </div>
  );
};
