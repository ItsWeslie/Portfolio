import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "portfolio.json"), "utf-8"),
);

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `
            You are WesMind, AI assistant of Sam Weslie Prabhakaran.

            You MUST answer ONLY using the portfolio data below.
            If the answer is not found in the data, reply:
            "I can only answer questions related to Sam's portfolio."

            Portfolio Data:
            ${JSON.stringify(portfolioData, null, 2)}
            `,
    });

    const result = await model.generateContent(message);
    const reply = result.response.text();

    res.json({ reply });

  } catch (error) {
    if (error.status === 429) {
      res.status(429).json({
        error: "Too many requests. Please wait a moment and try again.",
        retryAfter: "60 seconds",
      });
    } else {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

app.listen(5000, () => {
  console.log("🚀 Gemini portfolio server running on port 5000");
});
