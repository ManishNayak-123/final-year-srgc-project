// import { useState , useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import { getQuestions } from "../Services/SkillsAPI";
// import calculateScore from "../Utils/CalculateScore";

// export const useSkills = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(300);

  

//   useEffect(() => {
//     if (timeLeft <= 0) return;

//     const timer = setTimeout(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   // return { timeLeft };

//   const navigate = useNavigate();
//   const fetchQuestions = async () => {
//     const data = await getQuestions();
//     setQuestions(data);
//   };

//   const handleAnswer = (answer) => {
//     const updated = [...answers];
//     updated[currentQ] = answer;
//     setAnswers(updated);
//   };

//     const prevQuestion = () => {
//     if (currentQ > 0) {
//       setCurrentQ(currentQ - 1);
//     }
//   };

//   const nextQuestion = () => {
//     if (currentQ < questions.length - 1) {
//       setCurrentQ(currentQ + 1);
//     }
//   };

//   const submitTest = () => {
//     const score = calculateScore(questions, answers);
//     navigate("/services/skills/result", { state: { score } });
//   };

//   return {
//     questions,
//     currentQ,
//     answers,
//     timeLeft,
//     handleAnswer,
//     nextQuestion,
//     prevQuestion,
//     fetchQuestions,
//     submitTest,
//   };



//   // Add prevQuestion to the return object
//   // return {
//   //   // ... other returns
//   //   prevQuestion,
//   //   // ...
//   // };
// // };

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getQuestions } from "../Services/SkillsAPI";
// import calculateScore from "../Utils/calculateScore";

// export const useSkills = (subject) => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(300);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const data = await getQuestions();
//       const filtered = data.filter(q => q.subject === subject);
//       setQuestions(filtered);
//     };

//     fetchQuestions();
//   }, [subject]);

//   useEffect(() => {
//     if (timeLeft <= 0) return;

//     const timer = setTimeout(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   const handleAnswer = (answer) => {
//     const updated = [...answers];
//     updated[currentQ] = answer;
//     setAnswers(updated);
//   };

//   const prevQuestion = () => {
//     if (currentQ > 0) setCurrentQ(currentQ - 1);
//   };

//   const nextQuestion = () => {
//     if (currentQ < questions.length - 1) {
//       setCurrentQ(currentQ + 1);
//     }
//   };

//   const submitTest = () => {
//     const score = calculateScore(questions, answers);
//     navigate("/services/skills/result", { state: { score } });
//   };

//   return {
//     questions,
//     currentQ,
//     answers,
//     timeLeft,
//     handleAnswer,
//     nextQuestion,
//     prevQuestion,
//     submitTest,
//   };
// // };

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import { getQuestions } from "../Services/SkillsAPI";
// import calculateScore from "../Utils/calculateScore";

// export const useSkills = (subject) => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(1200);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       const data = await getQuestions();
//       const filtered = data.filter(q => q.subject === subject);
//       setQuestions(filtered);
//     };

//     fetchQuestions();
//   }, [subject]);

//   useEffect(() => {
//     if (timeLeft <= 0) return;

//     const timer = setTimeout(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   const handleAnswer = (answer) => {
//     const updated = [...answers];
//     updated[currentQ] = answer;
//     setAnswers(updated);
//   };

//   const prevQuestion = () => {
//     if (currentQ > 0) setCurrentQ(currentQ - 1);
//   };

//   const nextQuestion = () => {
//     if (currentQ < questions.length - 1) {
//       setCurrentQ(currentQ + 1);
//     }
//   };

//   const submitTest = () => {
//     const score = calculateScore(questions, answers);
//     navigate("/services/skills/result", { state: { score , subject} });
//   };

//   return {
//     questions,
//     currentQ,
//     answers,
//     timeLeft,
//     handleAnswer,
//     nextQuestion,
//     prevQuestion,
//     submitTest,
//   };
// };
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getQuestions } from "../Services/SkillsAPI";
import calculateScore from "../Utils/calculateScore";

export const useSkills = (subject) => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1500);

  const navigate = useNavigate();

  // Helper to check if the user is out of time
  const isTimeUp = timeLeft <= 0;

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestions();
      const filtered = data.filter(q => q.subject === subject);
      setQuestions(filtered);
    };
    fetchQuestions();
  }, [subject]);

  useEffect(() => {
    if (isTimeUp) {
      // Automatically submit the test when time reaches 0
      submitTest();
      return;
    };

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    // If time is up, don't allow answering
    if (isTimeUp) return;

    const updated = [...answers];
    updated[currentQ] = answer;
    setAnswers(updated);
  };

  const prevQuestion = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const nextQuestion = () => {
    // If time is up, don't allow moving forward
    if (isTimeUp) return;

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const submitTest = () => {
    const score = calculateScore(questions, answers);
    navigate("/services/skills/result", { state: { score, subject } });
  };

  return {
    questions,
    currentQ,
    answers,
    timeLeft,
    isTimeUp, // Export this so you can disable buttons in your UI
    handleAnswer,
    nextQuestion,
    prevQuestion,
    submitTest,
  };
};