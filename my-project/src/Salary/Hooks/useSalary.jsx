// import { useState } from "react";
// import { estimateSalary } from "../api/salaryAPI";

// export const useSalary = () => {
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getSalary = async (data) => {
//     setLoading(true);
//     const res = await estimateSalary(data);
//     setResult(res);
//     setLoading(false);
//   };

//   return { result, loading, getSalary };
// };

// client/src/features/salary/hooks/useSalary.js

import { useState } from "react";
import { calculateSalary } from "../Utils/salaryUtils";

export const useSalary = () => {
  const [result, setResult] = useState(null);

  const getSalary = (data) => {
    const res = calculateSalary(data);
    setResult(res);
  };

  return { result, getSalary };
};