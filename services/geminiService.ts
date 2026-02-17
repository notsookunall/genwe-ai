import { GoogleGenAI, Type } from "@google/genai";
import { AdConceptResponse } from "../types";

const ai = new GoogleGenAI({ 
  apiKey:import.meta.env.VITE_API_KEY });

export const generateAdConcept = async (
  productName: string,
  targetAudience: string
): Promise<AdConceptResponse> => {
  try {
    const prompt = `
      Create a viral 15-second video ad concept for a product named "${productName}" targeting "${targetAudience}".
      Return a JSON object with:
      - headline: A catchy 5-word hook.
      - visualDescription: A vivid description of the opening scene (visuals only).
      - script: The voiceover script (max 40 words).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            visualDescription: { type: Type.STRING },
            script: { type: Type.STRING },
          },
          required: ["headline", "visualDescription", "script"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AdConceptResponse;
  } catch (error) {
    console.error("Error generating ad concept:", error);
    throw new Error("Failed to generate ad concept");
  }
};