import express from "express";
import { generateCodeFromPrompt } from "./aiservices.js";
import { runCodegen } from "./codgen.js";
import fs from "fs";

const app = express();
app.use(express.json());

app.post("/rpa/generate", async (req, res) => {
  const { prompt } = req.body;
  try {
    const code = await generateCodeFromPrompt(prompt);

    // Save AI-generated code
    const filePath = `./scripts/generated/${Date.now()}-flow.spec.ts`;
    fs.writeFileSync(filePath, code);

    res.json({ success: true, filePath, code });
  } catch (err) {
    res.status(500).json({ error: err.message });      
  }
});

// Launch codegen manually if needed
app.get("/rpa/codegen", (req, res) => {
  runCodegen("https://indiafilings.com"); // Example site
  res.send("Codegen started...");
});

app.listen(4000, () => console.log("✅ RPA AI server running on http://localhost:4000"));
