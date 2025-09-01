import axios from "axios";

function getApiBaseUrl() {
  const url = process.env.AI_API_BASE_URL;
  if (!url) {
    throw new Error("AI_API_BASE_URL environment variable is not set.");
  }
  return url;
}

function getApiKey() {
  const key = process.env.AI_API_KEY;
  if (!key) {
    throw new Error("AI_API_KEY environment variable is not set.");
  }
  return key;
}

export async function generateCodeFromPrompt(prompt) {
  try {
    const response = await axios.post(
      `${getApiBaseUrl()}/generate`,
      { prompt },
      { headers: { Authorization: `Bearer ${getApiKey()}` } }
    );
    return response.data.code;
  } catch (error) {
    console.error("Error in generateCodeFromPrompt:", error.message);
    throw new Error(error.response?.data?.error || "Failed to generate code from AI.");
  }
}

export async function askAI(prompt) {
  try {
    const response = await axios.post(
      `${getApiBaseUrl()}/ask`,
      { prompt },
      { headers: { Authorization: `Bearer ${getApiKey()}` } }
    );
    return response.data.reply;
  } catch (error) {
    console.error("Error in askAI:", error.message);
    throw new Error(error.response?.data?.error || "Failed to get reply from AI.");
  }
}