import Groq from "groq-sdk";

const SYSTEM_PROMPT = `
You are a chef assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
 You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention,
  but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;


console.log("Key:", import.meta.env.VITE_GROQ_API_KEY);
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // to allow client-side requests from the browser
});

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      model: "openai/gpt-oss-20b",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return chatCompletion.choices[0]?.message?.content || "No recipe returned.";
  } catch (err) {
    console.error("Groq inference error:", err);
    return "Failed to generate recipe. Please check your API key and try again.";
  }
}