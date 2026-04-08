import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: "",
    city: "Houston",
    serviceType: "Regular Cleaning",
    urgency: "This Week",
    notes: "",
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/thank-you";
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Submission failed. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f7", color: "#111" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #2563eb, #1e40af)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "44px", marginBottom: "18px", lineHeight: "1.2" }}>
            Get a Fast Home Cleaning Quote
          </h1>
          <p style={{ fontSize: "20px", opacity: 0.95, maxWidth: "700px", margin: "0 auto" }}>
            Local providers • No obligation • Quick request
          </p>
        </div>
      </section>

      <section style={{ padding: "50px 20px", background: "white" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px"
          }}
        >
          {[
            ["Fast quote request", "Submit your request in under 2 minutes."],
            ["Local cleaning options", "We help connect you with nearby providers."],
            ["Easy, no-pressure process", "No obligation to book."],
          ].map(([title, text], i) => (
            <div
              key={i}
              style={{
                background: "#f8fafc",
                borderRadius: "18px",
                padding: "24px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.05)"
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#2563eb" }}>{title}</h3>
              <p style={{ color: "#444", lineHeight: "1.7" }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            background: "white",
            padding: "36px 28px",
            borderRadius: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ fontSize: "34px", marginBottom: "10px", color: "#2563eb", textAlign: "center" }}>
            Request Your Cleaning Quote
          </h2>

          <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
            Fill out the form below and submit your request.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              name="zip"
              placeholder="ZIP Code"
              value={form.zip}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              style={inputStyle}
            >
              <option>Regular Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move-Out Cleaning</option>
              <option>Recurring Cleaning</option>
            </select>

            <select
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              style={inputStyle}
            >
              <option>ASAP</option>
              <option>This Week</option>
              <option>Flexible</option>
            </select>

            <textarea
              name="notes"
              placeholder="Tell us a bit about your cleaning needs"
              value={form.notes}
              onChange={handleChange}
              rows="5"
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", color: "#444" }}>
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                style={{ marginTop: "3px" }}
              />
              I agree to be contacted regarding my cleaning request.
            </label>

            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "16px 22px",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              {loading ? "Submitting..." : "Get My Quote"}
            </button>

            {message && (
              <p style={{ color: "red", textAlign: "center", marginTop: "8px" }}>
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer
        style={{
          background: "#111827",
          color: "white",
          padding: "40px 20px",
          textAlign: "center"
        }}
      >
        <p>
          QuickClean Quote helps connect users requesting home cleaning services
          with local cleaning providers.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap"
          }}
        >
          <a href="/privacy" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "white", textDecoration: "none" }}>Terms of Service</a>
          <a href="/disclaimer" style={{ color: "white", textDecoration: "none" }}>Disclaimer</a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </footer>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  fontSize: "16px",
  outline: "none"
};              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Request My Free Quote
          </a>

          <p style={{ marginTop: "18px", fontSize: "14px" }}>
            Quick request - Local providers - No obligation
          </p>
        </div>
      </section>

      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "14px" }}>
            Why Use QuickClean Quote?
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 36px",
              color: "#555"
            }}
          >
            We make it easy to submit your cleaning request and get matched with
            local options.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px"
            }}
          >
            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Save Time</h3>
              <p>No need to search through dozens of cleaning providers one by one.</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Simple Request Process</h3>
              <p>Tell us what you need in just a few minutes.</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>No Pressure</h3>
              <p>Requesting a quote does not mean you are committed to book.</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Built for Convenience</h3>
              <p>Great for deep cleans, recurring cleaning, move-outs, and busy schedules.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="form" style={{ padding: "70px 20px", background: "white" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "14px" }}>
            Request Your Free Quote
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 36px",
              color: "#555"
            }}
          >
            Fill out the form below and we will review your request.
          </p>

          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}
          >
            <input
  type="hidden"
  name="_next"
  value="https://YOUR-VERCEL-DOMAIN/thank-you"
/>
<input type="hidden" name="_captcha" value="false" />
            <div style={{ display: "grid", gap: "14px" }}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              />

              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              />

              <textarea
                name="notes"
                placeholder="Additional Notes"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  minHeight: "120px"
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "14px 20px",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  width: "100%"
                }}
              >
                Get My Free Quote
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer
  style={{
    background: "#111827",
    color: "white",
    padding: "40px 20px",
    textAlign: "center"
  }}
>
  <p>
    QuickClean Quote helps connect users requesting home cleaning services
    with local cleaning providers.
  </p>

  <div
    style={{
      marginTop: "18px",
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      flexWrap: "wrap"
    }}
  >
    <a href="/privacy" style={{ color: "white", textDecoration: "none" }}>
      Privacy Policy
    </a>

    <a href="/terms" style={{ color: "white", textDecoration: "none" }}>
      Terms of Service
    </a>

    <a href="/disclaimer" style={{ color: "white", textDecoration: "none" }}>
      Disclaimer
    </a>

    <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
      Contact
    </a>
  </div>
</footer>
    </div>
  );
}
