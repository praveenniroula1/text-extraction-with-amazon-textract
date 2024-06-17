import express from "express";
dotenv.config();
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import textractRouter from "./src/textractRouter.js"; // Assuming this is your router file



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static assets (React frontend)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client", "build")));

// API Endpoint for Textract upload
app.use("/api/v1/textract", textractRouter);

// Serve React app for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
