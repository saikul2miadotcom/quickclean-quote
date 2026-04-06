export default function Contact() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh",
        padding: "60px 20px",
        color: "#111"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "white",
          padding: "40px 30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "18px", color: "#2563eb" }}>
          Contact Us
        </h1>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333", marginBottom: "18px" }}>
          If you have questions about your quote request, general inquiries, or support needs,
          you can reach out using the contact details below.
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333" }}>
          <strong>Email:</strong> your@email.com
        </p>

        <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#333" }}>
          <strong>Response Time:</strong> Typically within 1–3 business days
        </p>

        <div style={{ marginTop: "28px" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "white",
              padding: "14px 24px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
