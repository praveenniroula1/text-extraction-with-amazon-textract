import "dotenv/config"
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

import textractRouter from "./src/textractRouter.js";
app.use("/api/v1/textract", textractRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
