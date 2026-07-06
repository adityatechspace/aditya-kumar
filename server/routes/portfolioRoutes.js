import express from "express";
import Portfolio from "../models/Portfolio.js";
import fallbackPortfolio from "../data/portfolioData.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      console.warn("Portfolio document not found in database; returning fallback portfolio data.");
      return res.status(200).json({
        success: true,
        portfolioData: fallbackPortfolio,
        message: "Using fallback portfolio data because the database document is missing.",
      });
    }

    return res.status(200).json({
      success: true,
      portfolioData: portfolio.data,
    });
  } catch (error) {
    console.error("Portfolio fetch error:", error);
    return res.status(200).json({
      success: true,
      portfolioData: fallbackPortfolio,
      message: "Using fallback portfolio data because database access failed.",
    });
  }
});

export default router;