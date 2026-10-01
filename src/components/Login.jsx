import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log("PROJECT ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

const loginRequest = async ({ email, password }) => {
  const session = await account.createEmailPasswordSession({
    email,
    password,
  });

  return session;
};

const inputClasses =
  "block w-full h-[38px] px-3 py-1.5 text-base leading-6 text-[#212529] bg-white " +
  "border border-[#dee2e6] rounded-md placeholder:text-[#6c757d] " +
  "transition focus:outline-none focus:border-[#86b7fe] focus:ring-4 focus:ring-[#0d6efd]/25 " +
  "aria-invalid:border-red-600";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);

    try {
      await loginRequest({
        email: email.trim(),
        password,
      });

      navigate("/");
    } catch (err) {
      setError(err?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa] px-3 py-4 font-sans text-[#212529]">
      <div className="w-full max-w-[540px] rounded-md border border-[#dee2e6] bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:p-6">
        <h1 className="mb-6 text-center text-[1.75rem] font-semibold leading-tight sm:text-[2rem]">
          Login
        </h1>

        <form onSubmit={handleSubmit} noValidate>
          {error && (
            <div
              id="login-error"
              role="alert"
              className="mb-4 rounded-md border border-[#f5c2c7] bg-[#f8d7da] px-3 py-2 text-[0.95rem] text-[#842029]"
            >
              {error}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-base leading-6"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={error === "Email is required."}
              aria-describedby={error ? "login-error" : undefined}
              className={inputClasses}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-base leading-6"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={error === "Password is required."}
              aria-describedby={error ? "login-error" : undefined}
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="block h-[38px] w-full rounded-md border border-[#0d6efd] bg-[#0d6efd] px-3 py-1.5 text-base leading-6 text-white transition hover:border-[#0b5ed7] hover:bg-[#0b5ed7] active:border-[#0a58ca] active:bg-[#0a58ca] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0d6efd]/50 disabled:cursor-not-allowed disabled:opacity-65"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-base leading-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#0d6efd] underline hover:text-[#0a58ca]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;