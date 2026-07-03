import mongoose from "mongoose";

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 5000;

export const connectDB = async () => {
  let attempts = 0;

  const tryConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);

      console.log("MongoDB connected successfully");
    } catch (error) {
      attempts += 1;
      console.error(
        `MongoDB connection failed (attempt ${attempts}):`,
        error.message
      );

      if (attempts < MAX_RETRIES) {
        console.log(`Retrying MongoDB connection in ${RETRY_DELAY_MS / 1000}s...`);
        setTimeout(tryConnect, RETRY_DELAY_MS);
      } else {
        console.error(
          "Reached max MongoDB connection attempts. The server will not retry automatically anymore."
        );
      }
    }
  };

  // Kick off the first attempt (do not await here so server can start)
  tryConnect();
};