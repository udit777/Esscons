import { GoogleGenerativeAI } from "@google/generative-ai";
import { allProducts } from "../data/products";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let chatSession = null;

const initializeChat = async () => {
    if (!API_KEY) {
        console.error("Gemini API Key is missing!");
        return null;
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `
You are Scoop, the intelligent AI assistant for Esscons (Engineering Supply & Services Consultancy), a leading construction machinery dealer in Odisha, India.

**Your Role:**
- Answer questions about our construction machinery (Road Rollers, Mixers, Sprayers, etc.).
- Provide details based *strictly* on the product catalog below.
- Be professional, friendly, and concise.
- If asked about contact info: Mancheswar Ind Estate, Bhubaneswar. Phone: (0674) 2587826. Email: sahadevsahu@esscons.com.
- If a user asks for a product not in the list, politely apologize and suggest checking our custom orders.

**Product Catalog:**
${JSON.stringify(allProducts, null, 2)}

**Guidelines:**
- formatting: Use bolding for product names.
- Keep responses short (under 3 sentences per paragraph).
- Encourage users to "View details" or "Contact us".
`;

    chatSession = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "System Instruction: " + systemInstruction }]
            },
            {
                role: "model",
                parts: [{ text: "Understood. I am ready to assist Esscons customers." }]
            }
        ]
    });
};

export const getGeminiResponse = async (userMessage) => {
    try {
        if (!chatSession) {
            await initializeChat();
        }

        if (!chatSession) return "I'm having trouble initializing. Please check the API key.";

        const result = await chatSession.sendMessage(userMessage);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm currently offline or experiencing high traffic. Please try again later.";
    }
};
