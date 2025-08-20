import axios from "axios";

export async function generateCodeFromPrompt(prompt) {
  const response = await axios.post(
    process.env.AI_API_BASE_URL + "/generate",
    { prompt },
    { headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` } }
  );
  return response.data.code; // assuming your API returns code snippet
}
export async function askAI(prompt) {
  const response = await axios.post(
    process.env.AI_API_BASE_URL + "/ask",
    { prompt },
    { headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` } }
  );
  return response.data.reply; // assuming your API returns a reply
}