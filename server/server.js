import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const { default: app } = await import("./app.js");

const PORT = process.env.PORT || 5000;

const dbConnected = await connectDB();

if (!dbConnected) {
  console.warn("Server started without MongoDB. Portfolio routes will use fallback data if needed.");
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
