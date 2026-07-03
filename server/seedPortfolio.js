import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "./models/Portfolio.js";
import portfolioData from "./data/portfolioData.js";

dotenv.config();

const seedPortfolio = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Portfolio.deleteMany({});

    await Portfolio.create({
      data: portfolioData,
    });

    console.log("Portfolio data added successfully");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Portfolio seed failed:", error.message);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedPortfolio();