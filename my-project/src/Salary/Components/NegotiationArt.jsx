// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Zap, MessageSquare, TrendingUp, Target, Award } from 'lucide-react';

// const strategies = [
//   {
//     title: "The Anchor Technique",
//     desc: "Always be the first to mention a range. Use the top end of your calculated market value to set the 'anchor' for the conversation.",
//     icon: <Target className="text-rose-500" />,
//     color: "bg-rose-50"
//   },
//   {
//     title: "Value-Based Framing",
//     desc: "Don't ask for money based on 'need.' Frame it as an investment in your skills like MERN, Cloud, or AI that will solve their business problems.",
//     icon: <Award className="text-blue-500" />,
//     color: "bg-blue-50"
//   },
//   {
//     title: "The Silence Power",
//     desc: "After they give an offer, wait 5 seconds before speaking. This 'Tactical Pause' often encourages the recruiter to fill the gap with a better deal.",
//     icon: <MessageSquare className="text-emerald-500" />,
//     color: "bg-emerald-50"
//   },
//   {
//     title: "Leverage Multi-Skills",
//     desc: "If they can't meet the salary, negotiate for 'Invisible Capital' like remote work, stock options, or a performance-based bonus at 6 months.",
//     icon: <Zap className="text-amber-500" />,
//     color: "bg-amber-50"
//   }
// ];

// const NegotiationArt = () => {
//   return (
//     <div className="mt-10 p-10">
//       <div className="flex items-center gap-3 mb-10">
//         <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
//           <ShieldCheck size={20} />
//         </div>
//         <div>
//           <h3 className="text-2xl font-black text-slate-900 tracking-tight">The Art of Negotiation</h3>
//           <p className="text-slate-500 text-sm font-medium">Tactical moves to secure your {new Date().getFullYear()} market value.</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {strategies.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -5 }}
//             className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
//           >
//             <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
//               {item.icon}
//             </div>
//             <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
//             <p className="text-slate-500 text-sm leading-relaxed font-medium">
//               {item.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Market Sentiment Callout */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         className="mt-10 p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
//       >
//         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="max-w-md">
//             <div className="flex items-center gap-2 mb-3">
//               <TrendingUp size={18} className="text-blue-400" />
//               <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Market Insight</span>
//             </div>
//             <h3 className="text-xl font-bold mb-2">2026 Salary Trends</h3>
//             <p className="text-slate-400 text-sm">Full-stack developers with AI integration skills are seeing a 22% higher opening offer compared to traditional roles.</p>
//           </div>
//           <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-colors whitespace-nowrap">
//             Download Guide (PDF)
//           </button>
//         </div>
        
//         {/* Background Decoration */}
//         <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
//       </motion.div>
//     </div>
//   );
// };

// export default NegotiationArt;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Zap, MessageSquare, TrendingUp, Target, Award, Download, Loader2 } from 'lucide-react';
// import { downloadMarketInsights } from '../Utils/downloadPdf';

// const strategies = [
//   {
//     title: "The Anchor Technique",
//     desc: "Always be the first to mention a range. Use the top end of your calculated market value to set the 'anchor'.",
//     icon: <Target className="text-rose-500" />,
//     color: "bg-rose-50"
//   },
//   {
//     title: "Value-Based Framing",
//     desc: "Don't ask for money based on 'need.' Frame it as an investment in your skills like MERN or AI.",
//     icon: <Award className="text-blue-500" />,
//     color: "bg-blue-50"
//   },
//   // ... other strategies
// ];

// const NegotiationArt = () => {
//   const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownload = async () => {
//     setIsDownloading(true);
//     // We capture the whole "insights-container"
//     await downloadMarketInsights('insights-container', 'JiViKa-Negotiation-Guide.pdf');
//     setIsDownloading(false);
//   };

//   return (
//     <div className="mt-[-10px] md:p-10 p-5" id="insights-container"> {/* ID ADDED HERE */}
//       <div className="flex items-center justify-between mb-10">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
//             <ShieldCheck size={20} />
//           </div>
//           <div>
//             <h3 className="text-2xl font-black text-slate-900 tracking-tight">The Art of Negotiation</h3>
//             <p className="text-slate-500 text-sm font-medium">Tactical moves for your 2026 market value.</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {strategies.map((item, index) => (
//           <motion.div
//             key={index}
//             className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm"
//           >
//             <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-5`}>
//               {item.icon}
//             </div>
//             <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
//             <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div className="mt-10 p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
//         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="max-w-md">
//             <div className="flex items-center gap-2 mb-3">
//               <TrendingUp size={18} className="text-blue-400" />
//               <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Market Insight</span>
//             </div>
//             <h3 className="text-xl font-bold mb-2">Secure Your Future</h3>
//             <p className="text-slate-400 text-sm font-medium">Download this guide to keep these tactics ready for your next interview.</p>
//           </div>

//           <button 
//             onClick={handleDownload}
//             disabled={isDownloading}
//             className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all flex items-center gap-2 disabled:opacity-70"
//           >
//             {isDownloading ? (
//               <Loader2 className="animate-spin" size={20} />
//             ) : (
//               <Download size={20} />
//             )}
//             {isDownloading ? "Generating..." : "Download Guide (PDF)"}
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default NegotiationArt;


// const strategies = [
//   {
//     title: "The Anchor Technique",
//     desc: "Research suggests the first number mentioned in a negotiation serves as an 'anchor.' Be the first to state a range, using the top end of your JiViKa estimate.",
//     icon: "🎯",
//     color: "#fee2e2" // hex instead of tailwind oklch
//   },
//   {
//     title: "Value-Based Framing",
//     desc: "Frame your salary request as an 'Investment' rather than a 'Cost.' Explain how your MERN and AI skills will generate 5x more value for the company.",
//     icon: "💎",
//     color: "#dbeafe"
//   },
//   {
//     title: "The Tactical Pause",
//     desc: "After an offer is made, wait 5 seconds. Silence is uncomfortable for recruiters; they often fill it by mentioning signing bonuses or flexibility.",
//     icon: "⏳",
//     color: "#dcfce7"
//   },
//   {
//     title: "Non-Monetary Levers",
//     desc: "If the budget is fixed, negotiate for 'Invisible Capital': remote days, specialized certifications (AWS/Azure), or a 6-month performance review.",
//     icon: "🔑",
//     color: "#fef3c7"
//   },
//   {
//     title: "The Walk-Away Power",
//     desc: "Negotiation power comes from having options. Mention you are in 'final stages' with other firms to increase your perceived market demand.",
//     icon: "🚶",
//     color: "#f3e8ff"
//   },
//   {
//     title: "The Exact Number Effect",
//     desc: "Asking for ₹12,45,000 sounds more researched than ₹12,00,000. Specificity implies you have used precise data tools to calculate your worth.",
//     icon: "📊",
//     color: "#fae8ff"
//   },
//   {
//     title: "Package Breakdown",
//     desc: "Always ask for a written breakdown of CTC vs. In-hand. Look for PF, Gratuity, and Insurance to ensure the 'gross' isn't hiding a low 'net.'",
//     icon: "📝",
//     color: "#e0f2fe"
//   },
//   {
//     title: "The 'Final Offer' Test",
//     desc: "When told it's the 'final offer,' ask: 'Is there flexibility if we change the start date or project scope?' This re-opens the door without being pushy.",
//     icon: "🏁",
//     color: "#ffedd5"
//   }
// ];

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, TrendingUp, Download, Loader2 } from 'lucide-react';
// import { downloadMarketInsights } from '../Utils/downloadPdf';

// const NegotiationArt = () => {
//   const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownload = async () => {
//     setIsDownloading(true);
//     await downloadMarketInsights('negotiation-report', 'JiViKa-Negotiation-Guide.pdf');
//     setIsDownloading(false);
//   };

//   return (
//     <div className="mt-20 px-4 md:px-0">
//       {/* The Wrapper we will capture for the PDF */}
//       <div id="negotiation-report" className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        
//         {/* PDF Header */}
//         <div className="flex items-center justify-between mb-12 border-b border-slate-50 pb-8">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center">
//               <ShieldCheck size={24} />
//             </div>
//             <div>
//               <h3 className="text-3xl font-black text-slate-900 tracking-tight">Professional Negotiation Strategy</h3>
//               <p className="text-slate-500 font-medium italic">Powered by JiViKa Intelligence Portal</p>
//             </div>
//           </div>
//           <div className="hidden md:block text-right">
//             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Report ID: JVK-2026-NEG</p>
//             <p className="text-xs font-bold text-blue-600">Confidential Strategy Guide</p>
//           </div>
//         </div>

//         {/* 8-Grid Strategy */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {strategies.map((item, index) => (
//             <div key={index} className="flex gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
//               <div 
//                 style={{ backgroundColor: item.color }} 
//                 className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
//               >
//                 {item.icon}
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
//                 <p className="text-slate-500 text-sm leading-relaxed font-medium">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Market Footer */}
//         <div className="mt-12 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-start gap-4">
//             <div className="p-3 bg-white rounded-xl shadow-sm">
//               <TrendingUp className="text-blue-600" />
//             </div>
//             <div>
//               <h5 className="font-bold text-slate-900 text-lg">Market Sentiment (Q2 2026)</h5>
//               <p className="text-slate-500 text-sm max-w-md">
//                 Hybrid-first roles are currently offering 18% higher base salaries than 100% remote roles in the Indian Tech Sector.
//               </p>
//             </div>
//           </div>
//           <div className="text-center md:text-right border-l-0 md:border-l border-slate-200 pl-0 md:pl-8">
//             <p className="text-2xl font-black text-blue-600 tracking-tighter">Top 1%</p>
//             <p className="text-[10px] font-bold text-slate-400 uppercase">Candidate Percentile</p>
//           </div>
//         </div>
//       </div>

//       {/* Action Button (Stays outside the PDF capture area) */}
//       <div className="mt-8 flex justify-center">
//         <button 
//           onClick={handleDownload}
//           disabled={isDownloading}
//           className="group flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50"
//         >
//           {isDownloading ? <Loader2 className="animate-spin" /> : <Download />}
//           {isDownloading ? "Generating PDF..." : "Export Strategy as PDF"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NegotiationArt;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck, TrendingUp, Download, Loader2, Target, Award, MessageSquare, Zap, Globe, Scale, FileText, CheckCircle } from 'lucide-react';
// import { downloadMarketInsights } from '../Utils/downloadPdf';

// const strategies = [
//   {
//     title: "The Anchor Technique",
//     desc: "The first number mentioned sets the 'anchor.' Always provide a range where your desired salary is the floor, not the ceiling.",
//     icon: <Target size={24} color="#e11d48" />,
//     bgColor: "#fff1f2" 
//   },
//   {
//     title: "Value-Based Framing",
//     desc: "Frame your request as an investment. Detail how your MERN stack expertise reduces development time and long-term technical debt.",
//     icon: <Award size={24} color="#2563eb" />,
//     bgColor: "#eff6ff"
//   },
//   {
//     title: "The Tactical Pause",
//     desc: "After an offer is presented, remain silent for 5 seconds. This pressure often compels the recruiter to reveal additional budget flexibility.",
//     icon: <MessageSquare size={24} color="#059669" />,
//     bgColor: "#ecfdf5"
//   },
//   {
//     title: "Benefit Substitution",
//     desc: "If the base salary is firm, pivot to 'Soft Capital': Equity/ESOPs, remote work stipends, or a 4-day work week.",
//     icon: <Zap size={24} color="#d97706" />,
//     bgColor: "#fffbeb"
//   },
//   {
//     title: "Global Benchmarking",
//     desc: "Use international cost-of-living data to justify your rate, especially for remote roles with firms based in the US, UK, or EU.",
//     icon: <Globe size={24} color="#7c3aed" />,
//     bgColor: "#f5f3ff"
//   },
//   {
//     title: "The Exactness Premium",
//     desc: "Requests for precise numbers (e.g., ₹14,85,000) are perceived as more data-driven and less negotiable than rounded numbers.",
//     icon: <Scale size={24} color="#db2777" />,
//     bgColor: "#fdf2f8"
//   },
//   {
//     title: "Exploding Offers",
//     desc: "Avoid 'exploding offers' that expire in 24 hours. Request 72 hours to review the total rewards package professionally.",
//     icon: <FileText size={24} color="#475569" />,
//     bgColor: "#f8fafc"
//   },
//   {
//     title: "The Sign-on Lever",
//     desc: "A one-time sign-on bonus is easier for HR to approve than a base salary increase because it doesn't affect long-term recurring budgets.",
//     icon: <CheckCircle size={24} color="#0891b2" />,
//     bgColor: "#ecfeff"
//   }
// ];

// const NegotiationArt = () => {
//   const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownload = async () => {
//     setIsDownloading(true);
//     // Use the specific ID of the report container
//     await downloadMarketInsights('negotiation-report', 'JiViKa-Executive-Strategy.pdf');
//     setIsDownloading(false);
//   };

//   return (
//     <div className="mt-20">
//       {/* PDF Capture Area */}
//       <div 
//         id="negotiation-report" 
//         className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm"
//         style={{ backgroundColor: '#ffffff' }} // Force background for PDF
//       >
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 border-b border-slate-100 pb-8">
//           <div>
//             <div className="flex items-center gap-3 mb-2">
//               <div className="p-2 bg-slate-900 rounded-lg">
//                 <ShieldCheck size={20} color="#ffffff" />
//               </div>
//               <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Confidential Strategy</span>
//             </div>
//             <h3 className="text-3xl font-black text-slate-900">The Art of Negotiation</h3>
//             <p className="text-slate-500 font-medium">Strategic guide for high-impact engineering roles.</p>
//           </div>
//           <div className="text-left md:text-right">
//             <p className="text-sm font-bold text-slate-900">JiViKa Intelligence</p>
//             <p className="text-xs text-slate-400">Ref: JVK-TECH-2026</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
//           {strategies.map((item, index) => (
//             <div key={index} className="flex gap-5 items-start">
//               <div 
//                 className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center shadow-sm"
//                 style={{ backgroundColor: item.bgColor }}
//               >
//                 {item.icon}
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
//                 <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
//           <TrendingUp size={20} color="#2563eb" />
//           <p className="text-xs font-bold text-slate-600">
//             <span className="text-blue-600 uppercase mr-2">Market Pulse:</span> 
//             Engineers with Full-Stack + DevOps capabilities currently command a 25% premium in Tier-1 Indian tech hubs.
//           </p>
//         </div>
//       </div>

//       {/* Download Button */}
//       <div className="mt-8 flex justify-center">
//         <motion.button 
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={handleDownload}
//           disabled={isDownloading}
//           className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50"
//         >
//           {isDownloading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
//           {isDownloading ? "Preparing Document..." : "Download Strategy Guide"}
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default NegotiationArt;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ShieldCheck, TrendingUp, Download, Loader2, Target, Award, 
//   MessageSquare, Zap, Globe, Scale, FileText, CheckCircle 
// } from 'lucide-react';
// import { downloadMarketInsights } from '../Utils/downloadPdf';

// const strategies = [
//   {
//     title: "The Anchor Technique",
//     desc: "The first number mentioned sets the 'anchor.' Always provide a range where your desired salary is the floor, not the ceiling.",
//     icon: <Target size={24} color="#e11d48" />, // Hex for Red-600
//     bgColor: "#fff1f2" 
//   },
//   {
//     title: "Value-Based Framing",
//     desc: "Frame your request as an investment. Detail how your MERN stack expertise reduces development time and long-term technical debt.",
//     icon: <Award size={24} color="#2563eb" />, // Hex for Blue-600
//     bgColor: "#eff6ff"
//   },
//   {
//     title: "The Tactical Pause",
//     desc: "After an offer is presented, remain silent for 5 seconds. This pressure often compels the recruiter to reveal additional budget flexibility.",
//     icon: <MessageSquare size={24} color="#059669" />, // Hex for Emerald-600
//     bgColor: "#ecfdf5"
//   },
//   {
//     title: "Benefit Substitution",
//     desc: "If the base salary is firm, pivot to 'Soft Capital': Equity/ESOPs, remote work stipends, or a 4-day work week.",
//     icon: <Zap size={24} color="#d97706" />, // Hex for Amber-600
//     bgColor: "#fffbeb"
//   },
//   {
//     title: "Global Benchmarking",
//     desc: "Use international cost-of-living data to justify your rate, especially for remote roles with firms based in the US, UK, or EU.",
//     icon: <Globe size={24} color="#7c3aed" />, // Hex for Violet-600
//     bgColor: "#f5f3ff"
//   },
//   {
//     title: "The Exactness Premium",
//     desc: "Requests for precise numbers (e.g., ₹14,85,000) are perceived as more data-driven and less negotiable than rounded numbers.",
//     icon: <Scale size={24} color="#db2777" />, // Hex for Pink-600
//     bgColor: "#fdf2f8"
//   },
//   {
//     title: "Exploding Offers",
//     desc: "Avoid 'exploding offers' that expire in 24 hours. Request 72 hours to review the total rewards package professionally.",
//     icon: <FileText size={24} color="#475569" />, // Hex for Slate-600
//     bgColor: "#f8fafc"
//   },
//   {
//     title: "The Sign-on Lever",
//     desc: "A one-time sign-on bonus is easier for HR to approve than a base salary increase because it doesn't affect recurring budgets.",
//     icon: <CheckCircle size={24} color="#0891b2" />, // Hex for Cyan-600
//     bgColor: "#ecfeff"
//   }
// ];

// const NegotiationArt = () => {
//   const [isDownloading, setIsDownloading] = useState(false);

//   const handleDownload = async () => {
//     setIsDownloading(true);
//     // This ID must match the div wrapper below
//     await downloadMarketInsights('negotiation-report', 'JiViKa-Negotiation-Guide.pdf');
//     setIsDownloading(false);
//   };

//   return (
//     <div className="mt-20">
//       {/* WRAPPER FOR PDF CAPTURE 
//           We use inline style for background to ensure html2canvas 
//           sees a standard HEX value immediately.
//       */}
//       <div 
//         id="negotiation-report" 
//         className="p-10 rounded-[2.5rem] border border-slate-200 shadow-sm"
//         style={{ backgroundColor: '#ffffff' }} 
//       >
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 border-b border-slate-100 pb-8">
//           <div>
//             <div className="flex items-center gap-3 mb-2">
//               <div className="p-2 rounded-lg" style={{ backgroundColor: '#0f172a' }}>
//                 <ShieldCheck size={20} color="#ffffff" />
//               </div>
//               <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#2563eb' }}>
//                 JiViKa Executive Strategy
//               </span>
//             </div>
//             <h3 className="text-3xl font-black text-slate-900 tracking-tight">The Art of Negotiation</h3>
//             <p className="text-slate-500 font-medium">Professional tactics for International Tech Standards.</p>
//           </div>
//           <div className="text-left md:text-right">
//             <p className="text-sm font-bold text-slate-900">JiViKa Intelligence</p>
//             <p className="text-xs text-slate-400 font-mono">REPORT_ID: JVK-2026-NEG</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
//           {strategies.map((item, index) => (
//             <div key={index} className="flex gap-5 items-start">
//               <div 
//                 className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-sm"
//                 style={{ backgroundColor: item.bgColor }}
//               >
//                 {item.icon}
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
//                 <p className="text-slate-500 text-sm leading-relaxed font-medium">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div 
//           className="mt-12 p-6 rounded-2xl border border-slate-100 flex items-center gap-4"
//           style={{ backgroundColor: '#f8fafc' }}
//         >
//           <TrendingUp size={24} color="#2563eb" />
//           <p className="text-sm font-medium text-slate-600">
//             <strong style={{ color: '#2563eb' }}>MARKET PULSE:</strong> 
//             Candidates using data-driven valuation tools report a 20% higher success rate in securing top-bracket offers in Metro cities.
//           </p>
//         </div>
//       </div>

//       {/* DOWNLOAD BUTTON (Outside capture area) */}
//       <div className="mt-10 flex justify-center">
//         <motion.button 
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={handleDownload}
//           disabled={isDownloading}
//           className="flex items-center gap-3 px-10 py-5 text-white rounded-2xl font-black text-lg transition-all shadow-xl disabled:opacity-50"
//           style={{ backgroundColor: '#0f172a' }}
//         >
//           {isDownloading ? <Loader2 className="animate-spin" /> : <Download size={22} />}
//           {isDownloading ? "Generating PDF..." : "Download Strategy Guide"}
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default NegotiationArt;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Download,
  Loader2,
  Target,
  Award,
  MessageSquare,
  Zap,
  Globe,
  Scale,
  FileText,
  CheckCircle,
} from "lucide-react";
import { downloadMarketInsights } from "../Utils/downloadPdf";

const strategies = [
  {
    title: "The Anchor Technique",
    desc: "The first number mentioned sets the 'anchor.' Always provide a range where your desired salary is the floor.",
    icon: <Target size={24} color="#e11d48" />,
    bgColor: "#fff1f2",
  },
  {
    title: "Value-Based Framing",
    desc: "Frame your request as an investment using your MERN stack expertise.",
    icon: <Award size={24} color="#2563eb" />,
    bgColor: "#eff6ff",
  },
  {
    title: "The Tactical Pause",
    desc: "Pause after an offer to create pressure and reveal flexibility.",
    icon: <MessageSquare size={24} color="#059669" />,
    bgColor: "#ecfdf5",
  },
  {
    title: "Benefit Substitution",
    desc: "Negotiate perks if salary is fixed.",
    icon: <Zap size={24} color="#d97706" />,
    bgColor: "#fffbeb",
  },
  {
    title: "Global Benchmarking",
    desc: "Use international cost-of-living data to justify your rate, especially for remote roles with firms based in the US, UK, or EU.",
    icon: <Globe size={24} color="#7c3aed" />, // Hex for Violet-600
    bgColor: "#f5f3ff"
  },
  {
    title: "The Exactness Premium",
    desc: "Requests for precise numbers (e.g., ₹14,85,000) are perceived as more data-driven and less negotiable than rounded numbers.",
    icon: <Scale size={24} color="#db2777" />, // Hex for Pink-600
    bgColor: "#fdf2f8"
  },
  {
    title: "Exploding Offers",
    desc: "Avoid 'exploding offers' that expire in 24 hours. Request 72 hours to review the total rewards package professionally.",
    icon: <FileText size={24} color="#475569" />, // Hex for Slate-600
    bgColor: "#f8fafc"
  },
  {
    title: "The Sign-on Lever",
    desc: "A one-time sign-on bonus is easier for HR to approve than a base salary increase because it doesn't affect recurring budgets.",
    icon: <CheckCircle size={24} color="#0891b2" />, // Hex for Cyan-600
    bgColor: "#ecfeff"
  }
];

const NegotiationArt = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // 🔥 IMPORTANT: TEMPORARILY HIDE SVG ICONS
    const icons = document.querySelectorAll("#negotiation-report svg");
    icons.forEach((el) => (el.style.display = "none"));

    await downloadMarketInsights(
      "negotiation-report",
      "JiViKa-Negotiation-Guide.pdf"
    );

    // 🔥 RESTORE ICONS AFTER PDF
    icons.forEach((el) => (el.style.display = "block"));

    setIsDownloading(false);
  };

  return (
    <div className="mt-[-20px] p-10">
      {/* PDF WRAPPER */}
      <div
        id="negotiation-report"
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ background: "#0f172a", padding: "10px", borderRadius: "8px" }}>
              <ShieldCheck size={20} color="#fff" />
            </div>
            <span style={{ fontSize: "12px", fontWeight: "bold", color: "#2563eb" }}>
              JiViKa Executive Strategy
            </span>
          </div>

          <h2 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "10px" }}>
            The Art of Negotiation
          </h2>

          <p style={{ color: "#64748b" }}>
            Professional tactics for International Tech Standards.
          </p>
        </div>

        {/* STRATEGIES */}
        <div style={{ display: "grid", gap: "25px" }}>
          {strategies.map((item, index) => (
            <div key={index} style={{ display: "flex", gap: "15px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: item.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>

              <div>
                <h4 style={{ fontWeight: "bold" , padding : "10px"}}>{item.title}</h4>
                <p style={{ fontSize: "16px", color: "#555" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            background: "#f8fafc",
            borderRadius: "10px",
          }}
        >
          <p style={{ fontSize: "14px" }}>
            <strong style={{ color: "#2563eb" }}>MARKET PULSE:</strong>{" "}
            Data-driven candidates achieve 20% higher salary success.
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-10 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleDownload}
          disabled={isDownloading}
          style={{
            background: "#0f172a",
            color: "#fff",
            padding: "15px 25px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isDownloading ? "Generating PDF..." : "Download Strategy Guide"}
        </motion.button>
      </div>
    </div>
  );
};

export default NegotiationArt;