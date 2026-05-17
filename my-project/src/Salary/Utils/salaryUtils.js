// // Format number into Indian currency format
// export const formatSalary = (amount) => {
//   if (!amount) return "0";

//   return `₹ ${amount.toLocaleString("en-IN")}`;
// };

// // Convert salary to LPA (Lakhs Per Annum)
// export const toLPA = (amount) => {
//   if (!amount) return "0 LPA";

//   return (amount / 100000).toFixed(1) + " LPA";
// };

// // Get confidence color (for UI)
// export const getConfidenceColor = (confidence) => {
//   switch (confidence) {
//     case "High":
//       return "#2ecc71"; // green
//     case "Medium":
//       return "#f39c12"; // orange
//     case "Low":
//       return "#e74c3c"; // red
//     default:
//       return "#999";
//   }
// };

// client/src/features/salary/utils/salaryUtils.js

// const skillMap = {
//   React: 300000,
//   Node: 350000,
//   MongoDB: 250000,
//   JavaScript: 200000,
//   TypeScript: 300000,
// };

// const locationFactor = {
//   Tier1: 1.3,
//   Tier2: 1.1,
//   Tier3: 1.0,
// };

// export const calculateSalary = ({ skills = [], experience = 0, location = "Tier1" }) => {
//   let base = 200000;

//   let skillsValue = 0;
//   skills.forEach((skill) => {
//     skillsValue += skillMap[skill] || 100000;
//   });

//   let experienceBonus = experience * 150000;
//   let factor = locationFactor[location] || 1;

//   let total = (base + skillsValue + experienceBonus) * factor;

//   return {
//     min: Math.round(total - 100000),
//     max: Math.round(total + 200000),
//     confidence: getConfidence(skills, experience),
//   };
// };

// const getConfidence = (skills, experience) => {
//   if (skills.length >= 5 && experience >= 1) return "High";
//   if (skills.length >= 3) return "Medium";
//   return "Low";
// };

// // helpers
// export const formatSalary = (amount) => `₹ ${amount.toLocaleString("en-IN")}`;

// client/src/features/salary/utils/salaryUtils.js

// const skillMap = {
//   "React": 350000,
//   "Node.js": 400000,
//   "MongoDB": 250000,
//   "JavaScript": 200000,
//   "TypeScript": 300000,
//   "Next.js": 450000,
//   "Python": 350000,
//   "AWS": 500000,
//   "Docker": 300000,
// };

const skillMap = {
  // --- 1. PROGRAMMING LANGUAGES (CORE) ---
  "JavaScript": 250000,
  "TypeScript": 350000,
  "Python": 450000,
  "Java": 420000,
  "C++": 450000,
  "C": 300000,
  "C# (.NET)": 400000,
  "Go (Golang)": 600000,
  "Rust": 650000,
  "PHP": 250000,
  "Ruby": 400000,
  "Swift": 500000,
  "Kotlin": 480000,
  "Dart": 350000,
  "SQL": 200000,
  "Scala": 550000,
  "Solidity": 750000,

  // --- 2. WEB & FULL STACK (MERN/NEXT) ---
  "React": 400000,
  "Next.js": 500000,
  "Node.js": 450000,
  "Express.js": 150000,
  "MongoDB": 250000,
  "Tailwind CSS": 120000,
  "HTML5/CSS3": 150000,
  "Angular": 320000,
  "Vue.js": 280000,
  "NestJS": 350000,

  // --- 3. AI, DATA & MACHINE LEARNING ---
  "Generative AI (LLMs)": 750000,
  "Machine Learning": 600000,
  "Deep Learning": 650000,
  "Data Science": 550000,
  "TensorFlow/PyTorch": 500000,
  "PySpark": 400000,
  "Pandas/NumPy": 180000,

  // --- 4. CLOUD, DEVOPS & INFRA ---
  "AWS": 500000,
  "Azure": 450000,
  "Google Cloud (GCP)": 480000,
  "Kubernetes": 550000,
  "Docker": 300000,
  "Terraform": 400000,
  "CI/CD": 350000,
  "Redis": 300000,
  "PostgreSQL": 200000,

  // --- 5. SPECIALIZED & EMERGING ---
  "Cybersecurity": 500000,
  "Ethical Hacking": 550000,
  "Blockchain": 700000,
  "React Native": 400000,
  "Flutter": 380000,
  "UI/UX Design (Figma)": 250000,
  "SAP (ABAP)": 500000,
  "AR/VR Development": 600000
};
const locationFactor = {
  Tier1: 1.4, // Metro cities like Bangalore/Mumbai
  Tier2: 1.15,
  Tier3: 1.0,
};

export const calculateSalary = ({ skills = [], experience = 0, location = "Tier1" }) => {
  const base = 300000;
  let skillsValue = 0;

  skills.forEach((skill) => {
    skillsValue += skillMap[skill] || 150000;
   
  });

  const experienceBonus = experience * 200000;
  const factor = locationFactor[location] || 1;

  const total = (base + skillsValue + experienceBonus) * factor;

  // Add a slight random variance for "negotiation" realism
  const variance = total * 0.05; 

  return {
    min: Math.round(total - variance),
    max: Math.round(total + (variance * 2)),
    confidence: getConfidence(skills, experience),
    currency: "INR"
  };
};

const getConfidence = (skills, experience) => {
   if(!skills){
      alert("Inorder to predict your salary, So skills are required.");
    }
  if (skills.length >= 5 && experience >= 2) return "High";
  if (skills.length >= 3) return "Medium";
  return "Low";
};

export const formatSalary = (amount) => 
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);