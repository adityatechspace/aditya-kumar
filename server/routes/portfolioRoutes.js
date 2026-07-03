import express from "express";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio data not found",
      });
    }

    return res.status(200).json({
      success: true,
      portfolioData: portfolio.data,
    });
  } catch (error) {
    console.error("Portfolio fetch error:", error);

    return res.status(500).json({
      success: false,
      message: "Could not load portfolio data",
    });
  }
});

export default router;