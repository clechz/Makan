import { useState } from "react";

/**
 * Demo request form — submits to the Makan backend.
 *
 * The backend lives at https://api.makan.llc/v1/demo-requests in prod;
 * override with VITE_MAKAN_API_URL for staging / local dev. CORS on the
 * backend is locked to the makan.llc origin in production.
 */

const API_URL =
  import.meta.env.VITE_MAKAN_API_URL || "https://api.makan.llc";

const COUNTRIES = [
  ["SA", "Saudi Arabia"],
  ["AE", "United Arab Emirates"],
  ["EG", "Egypt"],
  ["JO", "Jordan"],
  ["KW", "Kuwait"],
  ["QA", "Qatar"],
  ["OM", "Oman"],
  ["BH", "Bahrain"],
  ["US", "United States"],
  ["GB", "United Kingdom"],
  ["DE", "Germany"],
  ["FR", "France"],
  ["NL", "Netherlands"],
  ["SE", "Sweden"],
  ["JP", "Japan"],
  ["SG", "Singapore"],
];

const ROLES = [
  "Founder / CEO",
  "CTO / Engineering Lead",
  "Operations / Construction",
  "Government / Public Sector",
  "Defense / Security",
  "Research / Academia",
  "Other",
];

const RequestDemo = () => {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(/** @type {string | null} */ (null));

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const payload = {
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      country: String(formData.get("country") || "").trim().toUpperCase(),
      role: String(formData.get("role") || "").trim(),
      intent: String(formData.get("intent") || "").trim(),
      locale: String(formData.get("locale") || "en"),
    };
    try {
      const res = await fetch(`${API_URL}/v1/demo-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        // CORS — credentials NOT included; this endpoint is public anonymous.
      });
      if (!res.ok) {
        let msg = `Failed to submit (${res.status})`;
        try {
          const body = await res.json();
          msg = body?.error?.message || msg;
        } catch (_) {
          /* ignore JSON parse errors on error body */
        }
        throw new Error(msg);
      }
      setDone(true);
    } catch (err) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <section
        id="request-demo"
        className="relative bg-black text-white py-24 px-6"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Thanks — we got your request.
          </h2>
          <p className="text-light-100 text-base md:text-lg max-w-md mx-auto">
            Someone on the Makan team will be in touch shortly. You'll receive
            an invitation email once your access is approved.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="request-demo"
      className="relative bg-black text-white py-24 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">
            Request a demo
          </h2>
          <p className="text-light-100 text-base md:text-lg">
            Tell us a bit about what you're trying to monitor. We'll get back
            to you within one business day.
          </p>
        </header>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-light-100">
              Work email
            </span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="rounded-lg border border-dark-200 bg-transparent px-3 py-2.5 text-white focus:border-primary focus:outline-none"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-light-100">
                Company
              </span>
              <input
                type="text"
                name="company"
                required
                maxLength={200}
                placeholder="Your organization"
                className="rounded-lg border border-dark-200 bg-transparent px-3 py-2.5 text-white focus:border-primary focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-light-100">
                Country
              </span>
              <select
                name="country"
                required
                defaultValue=""
                className="rounded-lg border border-dark-200 bg-transparent px-3 py-2.5 text-white focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  Select…
                </option>
                {COUNTRIES.map(([code, name]) => (
                  <option key={code} value={code} className="bg-black">
                    {name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-light-100">
              Your role
            </span>
            <select
              name="role"
              required
              defaultValue=""
              className="rounded-lg border border-dark-200 bg-transparent px-3 py-2.5 text-white focus:border-primary focus:outline-none"
            >
              <option value="" disabled>
                Select…
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r} className="bg-black">
                  {r}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-light-100">
              What are you trying to monitor?
            </span>
            <textarea
              name="intent"
              required
              rows={4}
              maxLength={2000}
              placeholder="Construction sites, ports, infrastructure, conflict zones, agriculture, environmental change…"
              className="rounded-lg border border-dark-200 bg-transparent px-3 py-2.5 text-white focus:border-primary focus:outline-none resize-y"
            />
          </label>

          <input type="hidden" name="locale" value="en" />

          {error ? (
            <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 rounded-full bg-white px-6 py-3 font-semibold text-black hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending…" : "Request demo"}
          </button>

          <p className="text-xs text-light-100 text-center mt-2">
            By submitting you agree we may contact you about Makan. We don't
            sell your data. One request per hour per IP.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RequestDemo;
