export default function Terms() {
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
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          padding: "40px 30px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "24px", color: "#2563eb" }}>
          Terms of Service
        </h1>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          By using this website, you agree to submit accurate information and use this
          website only for lawful purposes.
        </p>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          This website is intended to help users request cleaning service information
          and connect with service providers where applicable.
        </p>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          We do not guarantee service availability, pricing, scheduling, provider quality,
          or any final outcome from third-party providers.
        </p>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          Users are responsible for independently reviewing any provider, offer, or service
          before making a final decision.
        </p>

        <p style={{ lineHeight: "1.9" }}>
          Continued use of this site indicates acceptance of these terms.
        </p>
      </div>
    </div>
  );
}
