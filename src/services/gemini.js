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

const getFallbackResponse = (text) => {
    const lowerText = text.toLowerCase();

    // Contact Info
    if (lowerText.includes('contact') || lowerText.includes('location') || lowerText.includes('address') || lowerText.includes('email') || lowerText.includes('phone')) {
        return "You can find us at Mancheswar Ind Estate, Bhubaneswar. Call us at (0674) 2587826 or email sahadevsahu@esscons.com.";
    }

    // Product Queries
    const foundProduct = allProducts.find(p => lowerText.includes(p.name.toLowerCase()) || lowerText.includes(p.category.toLowerCase().slice(0, -1)));
    if (foundProduct) {
        return `We have the **${foundProduct.name}** (${foundProduct.category}). Model: ${foundProduct.model}. ${foundProduct.desc}.`;
    }

    // General Product/Service Keywords
    if (lowerText.includes('product') || lowerText.includes('machine') || lowerText.includes('list')) {
        return "We offer a wide range of construction machinery including Road Rollers, Mixers, and Sprayers. You can view them on our Products page.";
    }

    if (lowerText.includes('hello') || lowerText.includes('hi')) {
        return "Hello! I'm Scoop. The AI service is currently high-traffic, but I can still help you with basic info. Ask about our machines or contact details!";
    }

    return "Our AI brain is currently experiencing high traffic (Error 503), so I'm in 'Offline Mode'. I can answer basic questions about products and contact info, but for complex queries, please contact us directly.";
};

export const getGeminiResponse = async (userMessage) => {
    try {
        if (!chatSession) {
            await initializeChat();
        }

        if (!chatSession) throw new Error("Initialization failed");

        const result = await chatSession.sendMessage(userMessage);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.warn("Gemini API Error (Using Fallback):", error);
        return getFallbackResponse(userMessage);
    }
};
