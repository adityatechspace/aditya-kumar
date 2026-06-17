import { askPortfolioAssistant }
from "../services/aiService.js";

export const chatWithAI = async (
  req,
  res
) => {
  try {
    const { message } = req.body;

    const response =
      await askPortfolioAssistant(
        message
      );

    res.status(200).json({
      success: true,
      response,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      response:
        "AI Assistant is currently unavailable.",
    });
  }
};