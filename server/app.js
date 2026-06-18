import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

app.use("/api/chat", chatRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

app.use(errorHandler);

export default app;
