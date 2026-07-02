import { useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { sendContactMessage } from "../../services/api"; // adjust path if needed

function ContactForm() {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
});

const [status, setStatus] = useState({
type: "",
message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const showStatus = (type, message) => {
setStatus({ type, message });

setTimeout(() => {
  setStatus({ type: "", message: "" });
}, 4000);

};

const handleSubmit = async (e) => {
e.preventDefault();

if (!formData.name || !formData.email || !formData.message) {
  showStatus("error", "Please complete all fields before sending.");
  return;
}

try {
  setLoading(true);

  const data = await sendContactMessage(formData);

  if (data.success) {
    showStatus(
      "success",
      "Message delivered! I’ll get back to you as soon as possible."
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } else {
    showStatus("error", data.message || "Unable to send your message.");
  }
} catch (error) {
  showStatus(
    "error",
    error.response?.data?.message ||
      "Something went wrong. Please try again shortly."
  );
} finally {
  setLoading(false);
}

};

return ( <div className="relative">
{status.message && (
<div
className={`absolute -top-20 left-0 right-0 z-20 flex items-center gap-3 rounded-xl border px-4 py-3 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-300 ${
            status.type === "success"
              ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
              : "border-red-500/40 bg-red-500/15 text-red-300"
          }`}
> <FiCheckCircle className="shrink-0 text-xl" /> <p className="text-sm font-medium">{status.message}</p> </div>
)}

  <form
    onSubmit={handleSubmit}
    className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5"
  >
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
      className="w-full p-3 bg-slate-800 text-white rounded-xl outline-none border border-transparent focus:border-blue-500 transition"
    />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      className="w-full p-3 bg-slate-800 text-white rounded-xl outline-none border border-transparent focus:border-blue-500 transition"
    />

    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="5"
      placeholder="Message"
      className="w-full p-3 bg-slate-800 text-white rounded-xl outline-none border border-transparent focus:border-blue-500 transition resize-none"
    />

    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-600 disabled:cursor-not-allowed px-6 py-3 rounded-xl text-white font-medium transition"
    >
      <FiSend className={loading ? "animate-pulse" : ""} />

      {loading ? "Sending message..." : "Send Message"}
    </button>
  </form>
</div>

);
}

export default ContactForm;
