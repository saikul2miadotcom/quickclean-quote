export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh",
        color: "#111"
      }}
    >
      <section
        style={{
          background: "#2563eb",
          color: "white",
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "42px", lineHeight: "1.2", marginBottom: "18px" }}>
            Get a Fast, Free House Cleaning Quote
          </h1>

          <p style={{ fontSize: "18px", maxWidth: "720px", margin: "0 auto 24px" }}>
            Tell us what you need and we will help connect you with local cleaning
            providers in your area. No pressure, no obligation.
          </p>

          <a
            href="#form"
            style={{
              display: "inline-block",
              background: "white",
              color: "#2563eb",
              padding: "14px 24px",
              borderRadius: "10px",
              textDecoration: "none",
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
