import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json()
        : { message: await response.text() };

      if (!response.ok) {
        throw new Error(result.message || "Unable to log in.");
      }

      localStorage.setItem("adminToken", result.token);
      navigate("/admin/testimonials", { replace: true });
    } catch (requestError) {
      setError(requestError.message || "Unable to log in.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
          Portfolio Admin
        </p>

        <h1 className="mt-4 text-3xl font-bold">
          Sign in
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          Review and manage testimonial submissions.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="admin-email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email
            </label>

            <input
              id="admin-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <input
              id="admin-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default AdminLogin;