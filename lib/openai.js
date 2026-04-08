import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeLead(lead) {
  const prompt = `
You are an AI intake analyst for a local cleaning lead generation business.

Analyze this submitted lead and return ONLY valid JSON with these exact keys:
leadScore
leadQuality
priority
leadSummary
suggestedBuyerType
suggestedBuyerNotes

Rules:
- leadScore must be a number from 1 to 10
- leadQuality must be one of: Valid, Maybe, Low Quality
- priority must be one of: High, Medium, Low

Lead:
Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
ZIP: ${lead.zip}
City: ${lead.city}
Service Type: ${lead.serviceType}
Urgency: ${lead.urgency}
Notes: ${lead.notes}
Consent: ${lead.consent ? "Yes" : "No"}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0.2,
    messages: [
      {
        role: "user",
        content: prompt
      }
    ]
  });

  const text = response.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch (error) {
    return {
      leadScore: 5,
      leadQuality: "Maybe",
      priority: "Medium",
      leadSummary: "Lead submitted for cleaning service request.",
      suggestedBuyerType: "General Cleaning Provider",
      suggestedBuyerNotes: "Needs manual review."
    };
  }
}
