export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f7f7f7", color: "#111" }}>
      
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
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
            Tell us what you need and we’ll help connect you with local cleaning
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
            Quick request • Local providers • No obligation
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "14px" }}>
            Why Use QuickClean Quote?
          </h2>
          <p style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 36px", color: "#555" }}>
            We make it easy to submit your cleaning request and get matched with local options.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px"
            }}
          >
            {[
              ["Save Time", "No need to search through dozens of cleaning providers one by one."],
              ["Simple Request Process", "Tell us what you need in just a few minutes."],
              ["No Pressure", "Requesting a quote doesn’t mean you’re committed to book."],
              ["Built for Convenience", "Great for deep cleans, recurring cleaning, move-outs, and busy schedules."]
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" style={{ padding: "70px 20px", background: "white" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "14px" }}>
            Request Your Free Quote
          </h2>
          <p style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 36px", color: "#555" }}>
            Fill out the form below and we’ll review your request.
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
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
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

              <select
                name="cleaningType"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              >
                <option value="">Select Cleaning Type</option>
                <option>Standard Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-Out Cleaning</option>
                <option>Apartment Cleaning</option>
                <option>Recurring Cleaning</option>
                <option>One-Time Cleaning</option>
              </select>

              <input
                type="text"
                name="homeSize"
                placeholder="Home Size (sq ft / bedrooms)"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              />

              <input
                type="date"
                name="preferredDate"
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

              <p style={{ fontSize: "14px", color: "#666" }}>
                By submitting this form, you agree to be contacted about your cleaning request
                by us and/or local service providers.
              </p>

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

      {/* FAQ */}
      <section style={{ padding: "70px 20px", background: "#f3f4f6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "28px" }}>
            Frequently Asked Questions
          </h2>

          {[
            ["Is this quote request free?", "Yes. Submitting a request is free and there’s no obligation to book a service."],
            ["How soon will I hear back?", "Response times can vary depending on availability, your area, and the type of cleaning requested."],
            ["Am I booking a cleaning instantly?", "No. You’re submitting a quote request so your options can be reviewed and matched based on your request."],
            ["What types of cleaning can I request?", "You can request standard cleaning, deep cleaning, recurring cleaning, apartment cleaning, and move-out cleaning."],
            ["Do I have to commit after submitting?", "No. Requesting a quote does not require you to book a service."]
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "14px",
                marginBottom: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{faq[0]}</h3>
              <p>{faq[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", color: "white", padding: "40px 20px", textAlign: "center" }}>
        <p>
          QuickClean Quote helps connect users requesting home cleaning services
          with local cleaning providers.
        </p>

        <div style={{ marginTop: "18px", display: "flex", justifyContent: "center", gap: "18px", flexWrap: "wrap" }}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
          <p style={{ marginTop: "18px", fontSize: "14px" }}>
            Quick request • Local providers • No obligation
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "14px" }}>
            Why Use QuickClean Quote?
          </h2>
          <p style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 36px", color: "#555" }}>
            We make it easy to submit your cleaning request and get matched with local options.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px"
            }}
          >
            {[
              ["Save Time", "No need to search through dozens of cleaning providers one by one."],
              ["Simple Request Process", "Tell us what you need in just a few minutes."],
              ["No Pressure", "Requesting a quote doesn’t mean you’re committed to book."],
              ["Built for Convenience", "Great for deep cleans, recurring cleaning, move-outs, and busy schedules."]
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" style={{ padding: "70px 20px", background: "white" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "14px" }}>
            Request Your Free Quote
          </h2>
          <p style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 36px", color: "#555" }}>
            Fill out the form below and we’ll review your request.
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
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
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

              <select
                name="cleaningType"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              >
                <option value="">Select Cleaning Type</option>
                <option>Standard Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move-Out Cleaning</option>
                <option>Apartment Cleaning</option>
                <option>Recurring Cleaning</option>
                <option>One-Time Cleaning</option>
              </select>

              <input
                type="text"
                name="homeSize"
                placeholder="Home Size (sq ft / bedrooms)"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px"
                }}
              />

              <input
                type="date"
                name="preferredDate"
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

              <p style={{ fontSize: "14px", color: "#666" }}>
                By submitting this form, you agree to be contacted about your cleaning request
                by us and/or local service providers.
              </p>

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

      {/* FAQ */}
      <section style={{ padding: "70px 20px", background: "#f3f4f6" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "28px" }}>
            Frequently Asked Questions
          </h2>

          {[
            ["Is this quote request free?", "Yes. Submitting a request is free and there’s no obligation to book a service."],
            ["How soon will I hear back?", "Response times can vary depending on availability, your area, and the type of cleaning requested."],
            ["Am I booking a cleaning instantly?", "No. You’re submitting a quote request so your options can be reviewed and matched based on your request."],
            ["What types of cleaning can I request?", "You can request standard cleaning, deep cleaning, recurring cleaning, apartment cleaning, and move-out cleaning."],
            ["Do I have to commit after submitting?", "No. Requesting a quote does not require you to book a service."]
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "22px",
                borderRadius: "14px",
                marginBottom: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{faq[0]}</h3>
              <p>{faq[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111827", color: "white", padding: "40px 20px", textAlign: "center" }}>
        <p>
          QuickClean Quote helps connect users requesting home cleaning services
          with local cleaning providers.
        </p>

        <div style={{ marginTop: "18px", display: "flex", justifyContent: "center", gap: "18px", flexWrap: "wrap" }}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              border: "1px solid #ccc",
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
              padding: "12px",
              marginBottom: "12px",
              border: "1px solid #ccc",
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
              padding: "12px",
              marginBottom: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px"
            }}
          />

          <textarea
            name="notes"
            placeholder="Additional Notes"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              minHeight: "100px"
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
        </form>
      </div>
    </div>
  );
}
