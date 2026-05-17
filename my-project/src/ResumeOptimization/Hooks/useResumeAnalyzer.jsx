import { useState } from "react";
import { parsePdf } from "../Utils/ParsePdf";
import { calculateScore } from "../Utils/calculateScore";

export const useResumeAnalyzer = () => {
  const [score, setScore] = useState(null);
  const [matchedKeywords, setMatchedKeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async (file) => {
    try {
      setLoading(true);

      const text = await parsePdf(file);
      const result = calculateScore(text);

      setScore(result.score);
      setMatchedKeywords(result.matched);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    score,
    matchedKeywords,
    loading,
    analyzeResume,
  };
};

// src/features/resume/hooks/useResumeAnalyzer.js
// export const useResumeAnalyzer = () => {
//   const [score, setScore] = useState(null);
//   const [loading, setLoading] = useState(false);
//    const [matchedKeywords, setMatchedKeywords] = useState([]);
//   const analyzeResume = async (file) => {
//     try {
//       setLoading(true);
      
//       // 1. Extract text (Ensure ParsePdf is an async function)
//       const text = await parsePdf(file); 

//       // 2. Safety Check: If text is empty, don't calculate
//       if (!text || text.trim().length === 0) {
//         throw new Error("No text could be extracted from this PDF.");
//       }

//       // 3. Calculate (Ensure calculateScore handles strings correctly)
//       const result = calculateScore(text);
      
//       setScore(result.score);
//     } catch (err) {
//       console.error("Analysis Error:", err);
//       setScore(0); // Set to 0 instead of NaN on error
//       setMatchedKeywords(result.matched);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { score, loading, analyzeResume, matchedKeywords };
// };