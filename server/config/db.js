import mongoose from "mongoose";

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 5000;

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn("MONGODB_URI is not configured. Server will continue with fallback data only.");
    return false;
  }

  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log("MongoDB connected successfully");
      return true;
    } catch (error) {
      attempts += 1;
      console.error(`MongoDB connection failed (attempt ${attempts}):`, error.message);

      if (attempts < MAX_RETRIES) {
        console.log(`Retrying MongoDB connection in ${RETRY_DELAY_MS / 1000}s...`);
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      }
    }
  }

  console.error("Failed to connect to MongoDB after multiple attempts. Server will continue with fallback data only.");
  return false;
};