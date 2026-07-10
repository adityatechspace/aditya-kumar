import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import adminTestimonialRoutes from "./routes/adminTestimonialRoutes.js";

const app = express();

const clientUrl = process.env.CLIENT_URL?.replace(/\/$/, "");

const allowedOrigins = new Set([clientUrl].filter(Boolean));
const localDevOriginRegex = /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+|172\.(?:1[6-9]|2\d|3[0-1])\.\d+\.\d+):\d+$/;

app.use(
  cors({
    origin: (origin, callback) => {
      // allow non-browser requests (e.g., server-to-server)
      if (!origin) return callback(null, true);

      // Allow configured client URL or common local/dev origins
      if (allowedOrigins.has(origin) || localDevOriginRegex.test(origin)) {
        return callback(null, true);
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
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminTestimonialRoutes);

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

app.use(errorHandler);

export default app;
