
const apiKey = import.meta.env.VITE_API_KEY;

// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
// import { writeFileSync } from "node:fs";
// import { extension } from "mime-types";

// const apiKey = process.env.VITE_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseModalities: [
//     ],
//     responseMimeType: "text/plain",
// };

// async function run(prompt) {
//     const chatSession = model.startChat({
//         generationConfig,
//         history: [
//         ],
//     });

//     const result = await chatSession.sendMessage(prompt);
//     // TODO: Following code needs to be updated for client-side apps.
//     const candidates = result.response.candidates;
//     for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
//         for (let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
//             const part = candidates[candidate_index].content.parts[part_index];
//             if (part.inlineData) {
//                 try {
//                     const filename = `output_${candidate_index}_${part_index}.${extension(part.inlineData.mimeType)}`;
//                     writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
//                     console.log(`Output written to: ${filename}`);
//                 } catch (err) {
//                     console.error(err);
//                 }
//             }
//         }
//     }
//     console.log(result.response.text());
// }

// export default run;

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: apiKey });

async function main(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });
    console.log(response.text);
    return response.text;
}

export default main;