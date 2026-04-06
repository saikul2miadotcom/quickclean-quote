export default function ThankYou() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        background: "#f7f7f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px 30px",
          borderRadius: "20px",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "18px", color: "#2563eb" }}>
          Thank You!
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#333", marginBottom: "24px" }}>
          Your cleaning quote request has been submitted successfully.
          We will review your request and follow up as appropriate.
        </p>

        <p style={{ fontSize: "16px", color: "#666", marginBottom: "28px" }}>
          Please keep an eye on your email and phone in case a follow-up is needed.
        </p>

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
          Go Back Home
        </a>
      </div>
    </div>
  );
}
