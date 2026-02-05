import { GoogleGenerativeAI } from "@google/generative-ai";

// Hardcoded for testing purposes only
const API_KEY = "AIzaSyDo1Ea5GK11gVJr8RgLlyP5vP2ohwQ4zz8";

console.log("Testing Gemini API with hardcoded key...");

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

async function test() {
    try {
        console.log("Sending test message...");
        const result = await model.generateContent("Hello, are you online?");
        const response = await result.response;
        console.log("Response received:", response.text());
        console.log("SUCCESS: API is working!");
    } catch (error) {
        console.error("FAILURE: API call failed.");
        console.error("Error message:", error.message);
    }
}

test();
