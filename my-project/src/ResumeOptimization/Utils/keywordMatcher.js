// import { KEYWORDS } from "../Constants/keyword";

// export const keywordMatcher = (text) => {
//   const matched = [];
//   const missing = [];

//   KEYWORDS.forEach((keyword) => {
//     if (text.includes(keyword)) {
//       matched.push(keyword);
//     } else {
//       missing.push(keyword);
//     }
//   });

//   return { matched, missing };
// };

import { KEYWORDS } from "../Constants/keyword";

export const keywordMatcher = (text) => {
  const matched = [];
  const missing = [];
  
  // Normalize the entire resume text to lowercase once
  const lowerText = (text || "").toLowerCase();

  KEYWORDS.forEach((keyword) => {
    // Compare lowercase keyword against lowercase text
    if (lowerText.includes(keyword.toLowerCase())) {
      matched.push(keyword);
    } else {
      missing.push(keyword);
    }
  });

  return { matched, missing };
};