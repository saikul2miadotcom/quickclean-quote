export default function Privacy() {
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
          Privacy Policy
        </h1>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          We value your privacy. When you submit information through this website,
          we may collect details such as your name, email address, phone number,
          ZIP code, and service request information.
        </p>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          This information may be used to review your request, respond to inquiries,
          improve service quality, and help connect you with relevant local service providers.
        </p>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          By using this website and submitting a request, you acknowledge that your
          information may be shared with third-party providers for the purpose of
          responding to your quote request.
        </p>

        <p style={{ lineHeight: "1.9", marginBottom: "18px" }}>
          We do not guarantee provider availability, pricing, or service outcomes.
        </p>

        <p style={{ lineHeight: "1.9" }}>
          If you have privacy-related questions, please contact us at: your@email.com
        </p>
      </div>
    </div>
  );
}
