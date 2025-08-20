import express from "express";
import { generateCode } from "./codegen.js";
import { askAI } from "./aiService.js";

const app = express();
app.use(express.json());

// 🔹 Route to talk with AI
app.post("/ai", async (req, res) => {
  const { prompt } = req.body;
  const reply = await askAI(prompt);
  res.json({ reply });
});

// 🔹 Route to auto-generate code from AI
app.post("/generate", async (req, res) => {
  const { action } = req.body;
  const code = await generateCode(action);
  res.json({ code });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
