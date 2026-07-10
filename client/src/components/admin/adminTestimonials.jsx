import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function AdminTestimonials() {
  const navigate = useNavigate();

  const [testimonials, setTestimonials] = useState([]);
  const [filter, setFilter] = useState("pending");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("adminToken");

  async function fetchTestimonials() {
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/testimonials`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to load testimonials.");
      }

      setTestimonials(Array.isArray(result.testimonials) ? result.testimonials : []);
    } catch (error) {
      if (error.message.toLowerCase().includes("expired") || error.message.toLowerCase().includes("invalid")) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login", { replace: true });
        return;
      }

      setMessage(error.message || "Unable to load testimonials.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function updateStatus(id, status) {
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/admin/testimonials/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to update testimonial.");
      }

      setTestimonials((currentTestimonials) =>
        currentTestimonials.map((testimonial) =>
          testimonial._id === id
            ? { ...testimonial, status: result.testimonial.status }
            : testimonial
        )
      );

      setMessage(`Testimonial marked as ${status}.`);
    } catch (error) {
      setMessage(error.message || "Unable to update testimonial.");
    }
  }

  async function deleteTestimonial(id) {
    const shouldDelete = window.confirm(
      "Delete this testimonial permanently?"
    );

    if (!shouldDelete) return;

    setMessage("");

    try {
      const response = await fetch(`${API_URL}/admin/testimonials/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to delete testimonial.");
      }

      setTestimonials((currentTestimonials) =>
        currentTestimonials.filter((testimonial) => testimonial._id !== id)
      );

      setMessage("Testimonial deleted.");
    } catch (error) {
      setMessage(error.message || "Unable to delete testimonial.");
    }
  }

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  }

  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.status === filter
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Portfolio Admin
            </p>

            <h1 className="mt-3 text-3xl font-bold">
              Testimonials
            </h1>

            <p className="mt-2 text-slate-400">
              Review, approve, reject, or remove submissions.
            </p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-red-400/60 hover:text-white"
          >
            Log out
          </button>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          {["pending", "approved", "rejected"].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setFilter(status)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === status
                  ? "bg-blue-500 text-white"
                  : "border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {message && (
          <p className="mt-6 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-300">
            {message}
          </p>
        )}

        {isLoading ? (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-slate-400">
            Loading testimonials...
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center text-slate-400">
            No {filter} testimonials.
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {filteredTestimonials.map((testimonial) => (
              <article
                key={testimonial._id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

  <div className="flex flex-1 items-start gap-5">

    <a
      href={testimonial.profilePhoto}
      target="_blank"
      rel="noreferrer"
      className="shrink-0"
    >
      <div className="h-20 w-20 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
        {testimonial.profilePhoto ? (
        <a
    href={testimonial.profilePhoto}
    target="_blank"
    rel="noreferrer"
    className="shrink-0"
  >
    ...
  </a>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
            No Photo
          </div>
        )}
      </div>
    </a>

    <div className="flex-1">

      <h2 className="text-xl font-semibold text-white">
        {testimonial.name}
      </h2>

      <p className="mt-1 text-blue-400">
        {testimonial.designation}
      </p>

      {testimonial.email && (
        <p className="mt-2 text-sm text-slate-500">
          📧 {testimonial.email}
        </p>
      )}

      {testimonial.linkedinUrl && (
        <a
          href={testimonial.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline"
        >
          🔗 View LinkedIn Profile
        </a>
      )}

    </div>

  </div>

  <span
    className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold
      uppercase
      tracking-wider

      ${
        testimonial.status === "approved"
          ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
          : testimonial.status === "rejected"
          ? "border border-red-500/30 bg-red-500/10 text-red-400"
          : "border border-amber-500/30 bg-amber-500/10 text-amber-400"
      }
    `}
  >
    {testimonial.status}
  </span>

</div>

                <p className="mt-5 whitespace-pre-wrap leading-7 text-slate-300">
                  {testimonial.comment}
                </p>

                <p className="mt-4 text-xs text-slate-500">
                  Submitted: {new Date(testimonial.createdAt).toLocaleString()}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {testimonial.status !== "approved" && (
                    <button
                      type="button"
                      onClick={() => updateStatus(testimonial._id, "approved")}
                      className="rounded-xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
                    >
                      Approve
                    </button>
                  )}

                  {testimonial.status !== "rejected" && (
                    <button
                      type="button"
                      onClick={() => updateStatus(testimonial._id, "rejected")}
                      className="rounded-xl bg-amber-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-400"
                    >
                      Reject
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => deleteTestimonial(testimonial._id)}
                    className="rounded-xl border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default AdminTestimonials;