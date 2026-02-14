// 🔥 VERY IMPORTANT — MUST BE FIRST
import "./config/env.js";

import express from "express";
import cors from "cors";

import notesRouter from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Connect Database

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/api/notes", notesRouter);

connectDB().then(() => {
  // Start Server
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
