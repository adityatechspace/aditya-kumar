import mongoose from "mongoose";

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 5000;

export const connectDB = async () => {
  let attempts = 0;

  const tryConnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        // Mongoose v6+ uses these options by default, but leaving them explicit
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

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
          "Reached max MongoDB connection attempts. The server will continue running without a DB connection and will keep retrying in the background."
        );

        // Start background retries indefinitely, but don't exit the process
        setInterval(async () => {
          try {
            await mongoose.connect(process.env.MONGODB_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            });
            console.log("MongoDB connected successfully (background retry)");
          } catch (err) {
            console.error("Background retry failed:", err.message);
          }
        }, RETRY_DELAY_MS);
      }
    }
  };

  // Kick off the first attempt (do not await here so server can start)
  tryConnect();
};