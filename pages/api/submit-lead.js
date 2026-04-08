import { analyzeLead } from "../../lib/openai";
import { appendLeadRow } from "../../lib/sheets";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, phone, zip, city, serviceType, urgency, notes, consent } = req.body;

    if (!name || !email || !phone || !zip || !serviceType || !urgency || !consent) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const lead = {
      name,
      email,
      phone,
      zip,
      city: city || "Houston",
      serviceType,
      urgency,
      notes: notes || "",
      consent
    };

    const ai = await analyzeLead(lead);

    const leadId = `L${Date.now()}`;
    const date = new Date().toISOString().split("T")[0];

    const row = [
      leadId,
      date,
      lead.name,
      lead.email,
      lead.phone,
      lead.zip,
      lead.city,
      lead.serviceType,
      lead.urgency,
      lead.notes,
      lead.consent ? "Yes" : "No",
      ai.leadScore,
      ai.leadQuality,
      ai.leadSummary,
      ai.priority,
      ai.suggestedBuyerType,
      ai.suggestedBuyerNotes,
      "",
      "Pending",
      "New",
      "No",
      "",
      "No"
    ];

    await appendLeadRow(row);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submit lead error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
