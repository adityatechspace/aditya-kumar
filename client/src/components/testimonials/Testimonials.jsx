import { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaTimes,
  FaLinkedinIn,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

 function Testimonials() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [testimonialItems, setTestimonialItems] = useState([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);

  async function fetchTestimonials() {
  try {
    const response = await fetch(`${API_URL}/testimonials`);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Unable to load testimonials.");
    }

    setTestimonialItems(
      Array.isArray(result.testimonials)
        ? result.testimonials
        : []
    );
  } catch (error) {
    console.error("Testimonial fetch error:", error);
    setTestimonialItems([]);
  } finally {
    setIsLoadingTestimonials(false);
  }
}

useEffect(() => {
  fetchTestimonials();
}, []);

async function handleSubmit(event) {
  event.preventDefault();

  

  const form = event.currentTarget;

  const formData = new FormData();

  let linkedinUrl = form.linkedinUrl.value.trim();

if (
  linkedinUrl &&
  !linkedinUrl.startsWith("http://") &&
  !linkedinUrl.startsWith("https://")
) {
  linkedinUrl = `https://${linkedinUrl}`;
}

formData.append("linkedinUrl", linkedinUrl);

  formData.append("name", form.name.value.trim());
  formData.append("designation", form.designation.value.trim());
  formData.append("email", form.email.value.trim());
  formData.append("comment", form.comment.value.trim());

  if (selectedPhoto) {
    formData.append("profilePhoto", selectedPhoto);
  }

  try {
    const response = await fetch(`${API_URL}/testimonials`, {
      method: "POST",
      body: formData,
    });

    const contentType = response.headers.get("content-type") || "";

    const result = contentType.includes("application/json")
      ? await response.json()
      : { message: await response.text() };

    if (!response.ok) {
      throw new Error(result.message || "Unable to submit testimonial.");
    }

    form.reset();
    setSelectedPhoto(null);
    setIsSubmitted(true);

    // Optional: refresh approved testimonials
    // fetchTestimonials();

  } catch (error) {
    console.error("Testimonial submission error:", error);
    alert(error.message || "Something went wrong. Please try again.");
  }
}

  function closeForm() {
    setIsFormOpen(false);
    setIsSubmitted(false);
  }

  return (
    <section id="testimonials" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="relative mb-20">
          <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400/80">
                Testimonials
              </span>
            </div>

            <h2 className="mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
              What People Say
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Feedback from people I have worked and collaborated with.
            </p>

            <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
          </div>
        </div>

        {/* Published testimonials or empty state */}
{isLoadingTestimonials ? (
  <div className="rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-14 text-center">
    <p className="text-slate-400">Loading testimonials...</p>
  </div>
) : testimonialItems.length > 0 ? (          <div className="grid gap-8 md:grid-cols-3">
            {testimonialItems.map((item, index) => (
              <article
              key={item._id || `${item.name}-${index}`}               
              className="relative rounded-2xl border border-slate-800 bg-slate-900 p-7"
              >
                <FaQuoteLeft className="mb-5 text-2xl text-blue-400/70" />

                <p className="leading-7 text-slate-400">
                  {item.comment}
                </p>

              <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5">

  <div className="flex items-center gap-4">

    <div className="h-14 w-14 overflow-hidden rounded-full border border-slate-700 bg-slate-800">
      {item.profilePhoto ? (
        <img
          src={item.profilePhoto}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
          👤
        </div>
      )}
    </div>

    <div>
      <h3 className="font-semibold text-white">
        {item.name}
      </h3>

      <p className="mt-1 text-sm text-blue-400">
        {item.designation}
      </p>
    </div>

  </div>

  {item.linkedinUrl && (
    <a
      href={item.linkedinUrl}
      target="_blank"
      rel="noreferrer"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-blue-500/30
        bg-blue-500/10
        text-blue-400
        transition
        hover:bg-blue-500
        hover:text-white
      "
      title="View LinkedIn Profile"
    >
      <FaLinkedinIn size={18} />
    </a>
  )}

</div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-14 text-center">
            <FaQuoteLeft className="mx-auto text-3xl text-blue-400/70" />

            <h3 className="mt-5 text-2xl font-semibold text-white">
              No testimonials published yet
            </h3>

            <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-400">
              Have worked with me or collaborated on a project? You can share
              your feedback for review.
            </p>

            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="mt-7 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400"
            >
              Leave a Testimonial
            </button>

            <p className="mt-4 text-xs text-slate-500">
              Submissions are reviewed before being published.
            </p>
          </div>
        )}

        {/* Optional button even after testimonials exist */}
{!isLoadingTestimonials && testimonialItems.length > 0 && (          
  <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-blue-500/60 hover:text-white"
            >
              Leave a Testimonial
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isFormOpen && (
       <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
  <div className="flex min-h-full items-center justify-center">
    <div
      className="
        relative
        w-full
        max-w-2xl
        max-h-[90vh]
        overflow-y-auto

        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        p-7
        shadow-2xl
      "
    >
            <button
              type="button"
              onClick={closeForm}
              aria-label="Close testimonial form"
              className="absolute right-5 top-5 text-slate-400 transition hover:text-white"
            >
              <FaTimes className="text-xl" />
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  Thank you for your feedback
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  Your testimonial will be reviewed before it is published.
                </p>

                <button
                  type="button"
                  onClick={closeForm}
                  className="mt-7 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-white">
                  Leave a Testimonial
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Your email is optional and will remain private. Testimonials
                  are reviewed before publication.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="testimonial-name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Full Name *
                    </label>

                    <input
                      id="testimonial-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="testimonial-designation"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Designation / Relationship *
                    </label>

                    <input
                      id="testimonial-designation"
                      name="designation"
                      type="text"
                      required
                      placeholder="For example: Team Lead, Client, Colleague"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="testimonial-email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email <span className="text-slate-500">(optional)</span>
                    </label>
                    

                    <input
                      id="testimonial-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>

                  <div>
  <label
    htmlFor="testimonial-linkedin"
    className="mb-2 block text-sm font-medium text-slate-300"
  >
    LinkedIn Profile{" "}
    <span className="text-slate-500">(optional)</span>
  </label>

  <input
    id="testimonial-linkedin"
    name="linkedinUrl"
    type="text"
    placeholder="https://www.linkedin.com/in/your-username"
    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
  />

  <p className="mt-2 text-xs text-slate-500">
    Optional. Your LinkedIn profile may be displayed publicly with your testimonial if it is approved.
  </p>
</div>

                  <div>
  <label
    htmlFor="testimonial-profile-photo"
    className="mb-2 block text-sm font-medium text-slate-300"
  >
    Profile Photo <span className="text-slate-500">(optional)</span>
  </label>

  <input
  id="testimonial-profile-photo"
  name="profilePhoto"
  type="file"
  accept="image/jpeg,image/png,image/webp"
  onChange={(event) => {
    const file = event.target.files?.[0] || null;

    if (!file) {
      setSelectedPhoto(null);
      setPhotoPreview("");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Profile photo must be 2 MB or smaller.");
      event.target.value = "";
      setSelectedPhoto(null);
      setPhotoPreview("");
      return;
    }

    setSelectedPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }}
  className="
    block
    w-full
    cursor-pointer
    rounded-xl
    border
    border-slate-700
    bg-slate-950
    px-4
    py-3
    text-sm
    text-slate-300

    file:mr-4
    file:rounded-lg
    file:border-0
    file:bg-blue-500/15
    file:px-4
    file:py-2
    file:font-medium
    file:text-blue-300
    hover:file:bg-blue-500/25
  "
/>

<p className="mt-2 text-xs text-slate-500">
  Optional. JPEG, PNG, or WebP only (maximum 2 MB). If approved, this photo
  will be displayed publicly with your testimonial.
</p>

{photoPreview && (
  <div className="mt-5 flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
    <img
      src={photoPreview}
      alt="Profile preview"
      className="h-16 w-16 rounded-full border border-slate-700 object-cover"
    />

    <div className="flex-1">
      <p className="font-medium text-slate-200">
        {selectedPhoto?.name}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {(selectedPhoto?.size / 1024).toFixed(1)} KB
      </p>
    </div>

    <button
      type="button"
      onClick={() => {
        setSelectedPhoto(null);
        setPhotoPreview("");

        document.getElementById("testimonial-profile-photo").value = "";
      }}
      className="rounded-lg border border-red-500/30 px-3 py-1.5 text-xs text-red-300 transition hover:bg-red-500/10"
    >
      Remove
    </button>
  </div>
)}
</div>
                  <div>
                    <label
                      htmlFor="testimonial-comment"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Feedback *
                    </label>

                    <textarea
                      id="testimonial-comment"
                      name="comment"
                      required
                      rows="5"
                      maxLength="700"
                      placeholder="Share your experience of working with me..."
                      className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
                  >
                    Submit for Review
                  </button>
                </form>
              </>
            )}
          </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;