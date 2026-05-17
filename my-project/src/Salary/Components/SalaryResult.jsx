// const SalaryResult = ({ result }) => {
//   if (!result) return null;

//   return (
//     <div>
//       <h2>Estimated Salary</h2>
//       <p>₹ {result.min} - ₹ {result.max}</p>
//       <p>Confidence: {result.confidence}</p>
//     </div>
//   );
// };

// export default SalaryResult;

// import React from "react";
// import SalaryCard from "./SalaryCard";

// const SalaryResult = ({ result }) => {
//   if (!result) return null;

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <SalaryCard
//         min={result.min}
//         max={result.max}
//         confidence={result.confidence}
//       />
//     </div>
//   );
// };

// export default SalaryResult;

// client/src/features/salary/components/SalaryResult.jsx

import SalaryCard from "./SalaryCard";

const SalaryResult = ({ result }) => {
  if (!result) return null;

  return (
    <SalaryCard
      min={result.min}
      max={result.max}
      confidence={result.confidence}
    />
  );
};

export default SalaryResult;