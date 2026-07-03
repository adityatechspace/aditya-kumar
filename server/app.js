import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

const app = express();

const clientUrl = process.env.CLIENT_URL?.replace(/\/$/, "");

const allowedOrigins = new Set([clientUrl].filter(Boolean));

app.use(
  cors({
    origin: (origin, callback) => {
      // allow non-browser requests (e.g., server-to-server)
      if (!origin) return callback(null, true);

      // Allow configured client URL or any Vite dev server origin on port 5173
if (
  allowedOrigins.has(origin) ||
  /^http:\/\/localhost:\d+$/.test(origin) ||
  /^http:\/\/172\.20\.\d+\.\d+:\d+$/.test(origin)
) {        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

app.use("/api/chat", chatRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/portfolio", portfolioRoutes);

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

app.use(errorHandler);

export default app;
