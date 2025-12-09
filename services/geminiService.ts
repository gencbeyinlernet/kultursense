import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisColor, AnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeEthicalContent = async (userPrompt: string): Promise<AnalysisResult> => {
  if (!apiKey) {
    return {
      color: AnalysisColor.YELLOW,
      title: "API Anahtarı Eksik",
      explanation: "Lütfen Gemini API anahtarının tanımlı olduğundan emin olun."
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Sen çocuklar için bir yapay zeka etiği öğretmenisin. Bir çocuk şu içeriği/resmi oluşturmak istiyor: "${userPrompt}".
      Bu isteği şu kriterlere göre analiz et:
      1. Tarihi veya kültürel değerleri çarpıtıyor mu?
      2. Deepfake veya sahte bilgi riski taşıyor mu?
      3. Etik olarak uygun mu?
      
      Çocuklara uygun, basit bir dille yanıt ver.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            color: {
              type: Type.STRING,
              enum: ["GREEN", "YELLOW", "RED"],
              description: "GREEN: Güvenli/Etik, YELLOW: Dikkatli olunmalı/Yanlış anlaşılabilir, RED: Tehlikeli/Sahte/Kültüre Saygısız"
            },
            title: {
              type: Type.STRING,
              description: "Durumu özetleyen kısa başlık (Örn: Harika Bir Fikir, Bir Dakika Duralım, Bu Uygun Değil)"
            },
            explanation: {
              type: Type.STRING,
              description: "Çocuğa yönelik 2-3 cümlelik açıklayıcı geri bildirim."
            }
          },
          required: ["color", "title", "explanation"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response");
    
    const json = JSON.parse(text);
    return {
      color: json.color as AnalysisColor,
      title: json.title,
      explanation: json.explanation
    };

  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      color: AnalysisColor.YELLOW,
      title: "Bağlantı Hatası",
      explanation: "Şu anda yapay zeka öğretmenine ulaşamıyoruz. Lütfen tekrar dene."
    };
  }
};