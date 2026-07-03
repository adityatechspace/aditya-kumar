import { GoogleGenerativeAI } from "@google/generative-ai";
import Portfolio from "../models/Portfolio.js";

console.log("Gemini API key loaded:", !!process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askPortfolioAssistant = async (userQuestion) => {
  // Load portfolio from database
  let portfolioDoc;

  try {
    portfolioDoc = await Portfolio.findOne();
  } catch (err) {
    console.error("Error fetching portfolio from DB:", err.message);
    throw new Error("Internal server error");
  }

  if (!portfolioDoc || !portfolioDoc.data) {
    return "Sorry, portfolio data is not available right now.";
  }

  const portfolioData = portfolioDoc.data;

  const portfolioContext = `
You are ${portfolioData.personal?.name || "the portfolio owner's"}'s AI Portfolio Assistant.

Your job is to help visitors learn about ${portfolioData.personal?.name || "the portfolio owner"} and the portfolio.

You may answer ONLY questions related to:

- About
- Skills
- Projects
- Experience
- Education
- Certifications
- Technologies
- Contact Information
- Career Goals

------------------------------

RESPONSE STYLE

- Speak naturally and professionally.
- Speak in FIRST PERSON whenever appropriate.
- Be concise but informative.
- Never expose raw JSON.
- Never invent information.
- If information is not available in the portfolio, politely say so.

------------------------------

FORMATTING

Use Markdown.

For skills use headings and bullet points.

For experience use headings and short paragraphs.

For certifications use bullet points.

If the user asks something unrelated to the portfolio, reply with the configured fallback message if present.
`;

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
${portfolioContext}

============================

PORTFOLIO INFORMATION

Personal
${JSON.stringify(portfolioData.personal || {}, null, 2)}

About
${JSON.stringify(portfolioData.about || {}, null, 2)}

Skills
${JSON.stringify(portfolioData.skills || {}, null, 2)}

Projects
${JSON.stringify(portfolioData.projects || {}, null, 2)}

Experience
${JSON.stringify(portfolioData.experience || {}, null, 2)}

Education
${JSON.stringify(portfolioData.education || {}, null, 2)}

Certifications
${JSON.stringify(portfolioData.certifications || {}, null, 2)}

Contact
${JSON.stringify(portfolioData.contact || {}, null, 2)}

Social
${JSON.stringify(portfolioData.social || {}, null, 2)}

============================

USER QUESTION

${userQuestion}

============================

Answer:
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return response;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm currently unable to answer your question. Please try again in a few moments.";
  }
};