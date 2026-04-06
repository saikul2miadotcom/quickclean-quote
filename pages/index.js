export default function Home() {
  return (
    <div style={{
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      background: "#f7f7f7",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
        QuickClean Quote
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "24px" }}>
        Get a fast, free house cleaning quote.
      </p>

      <a
        href="#form"
        style={{
          display: "inline-block",
          background: "#2563eb",
          color: "white",
          padding: "14px 20px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          marginBottom: "40px"
        }}
      >
        Request My Free Quote
      </a>

      <div
        id="form"
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "16px",
          maxWidth: "600px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Request Form</h2>

        <form action="https://formsubmit.co/your@email.com" method="POST">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
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
