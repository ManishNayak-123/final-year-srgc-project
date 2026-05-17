// // import jsPDF from 'jspdf';
// // import html2canvas from 'html2canvas';

// // export const downloadMarketInsights = async (elementId, fileName = "JiViKa-Market-Insights.pdf") => {
// //   const element = document.getElementById(elementId);
// //   if (!element) return;

// //   try {
// //     const canvas = await html2canvas(element, {
// //       scale: 2, // Higher quality
// //       useCORS: true,
// //       backgroundColor: "#ffffff",
// //     });

// //     const imgData = canvas.toDataURL('image/png');
// //     const pdf = new jsPDF('p', 'mm', 'a4');
    
// //     const imgProps = pdf.getImageProperties(imgData);
// //     const pdfWidth = pdf.internal.pageSize.getWidth();
// //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

// //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
// //     pdf.save(fileName);
// //   } catch (error) {
// //     console.error("PDF Generation Error:", error);
// //   }
// // };

// // src/features/salary/utils/downloadPdf.js
// // import jsPDF from 'jspdf';
// // import html2canvas from 'html2canvas';

// // export const downloadMarketInsights = async (elementId, fileName = "JiViKa-Market-Insights.pdf") => {
// //   const element = document.getElementById(elementId);
// //   if (!element) return;

// //   try {
// //     const canvas = await html2canvas(element, {
// //       scale: 2,
// //       useCORS: true,
// //       backgroundColor: "#ffffff",
// //       // ADD THIS SECTION BELOW TO FIX THE OKLCH ERROR
// //       onclone: (clonedDoc) => {
// //         const clonedElement = clonedDoc.getElementById(elementId);
// //         // This removes the oklch variable that Tailwind adds to some elements
// //         clonedElement.style.colorScheme = 'light';
        
// //         // Find all elements and check for oklch colors in shadows/borders
// //         const allElements = clonedElement.getElementsByTagName("*");
// //         for (let el of allElements) {
// //           const style = window.getComputedStyle(el);
// //           // If html2canvas crashes on specific elements, we force them to white/standard hex
// //           if (style.backgroundColor.includes('oklch')) {
// //             el.style.backgroundColor = '#ffffff'; 
// //           }
// //         }
// //       }
// //     });

// //     const imgData = canvas.toDataURL('image/png');
// //     const pdf = new jsPDF('p', 'mm', 'a4');
// //     const pdfWidth = pdf.internal.pageSize.getWidth();
// //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

// //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
// //     pdf.save(fileName);
// //   } catch (error) {
// //     console.error("PDF Generation Error:", error);
// //   }
// // };

// // import jsPDF from "jspdf";
// // import html2canvas from "html2canvas";

// // export const downloadMarketInsights = async (
// //   elementId,
// //   fileName = "JiViKa-Market-Insights.pdf"
// // ) => {
// //   const element = document.getElementById(elementId);
// //   if (!element) return;

// //   try {
// //     const canvas = await html2canvas(element, {
// //       scale: 2,
// //       useCORS: true,
// //       backgroundColor: "#ffffff",

// //       onclone: (clonedDoc) => {
// //         const clonedElement = clonedDoc.getElementById(elementId);

// //         // Force safe base styles
// //         clonedElement.style.color = "#000";
// //         clonedElement.style.backgroundColor = "#fff";

// //         const allElements = clonedElement.querySelectorAll("*");

// //         allElements.forEach((el) => {
// //           const style = window.getComputedStyle(el);

// //           // FIX ALL POSSIBLE OKLCH USAGES 👇

// //           // Text color
// //           if (style.color.includes("oklch")) {
// //             el.style.color = "#000";
// //           }

// //           // Background
// //           if (style.backgroundColor.includes("oklch")) {
// //             el.style.backgroundColor = "#fff";
// //           }

// //           // Border
// //           if (style.borderColor.includes("oklch")) {
// //             el.style.borderColor = "#000";
// //           }

// //           // Box shadow (very common crash point)
// //           if (style.boxShadow && style.boxShadow.includes("oklch")) {
// //             el.style.boxShadow = "none";
// //           }

// //           // Outline
// //           if (style.outlineColor && style.outlineColor.includes("oklch")) {
// //             el.style.outlineColor = "#000";
// //           }
// //         });
// //       },
// //     });

// //     const imgData = canvas.toDataURL("image/png");

// //     const pdf = new jsPDF("p", "mm", "a4");

// //     const pdfWidth = pdf.internal.pageSize.getWidth();
// //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

// //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
// //     pdf.save(fileName);
// //   } catch (error) {
// //     console.error("PDF Generation Error:", error);
// //   }
// // };

// // import jsPDF from 'jspdf';
// // import html2canvas from 'html2canvas';

// // /**
// //  * Generates a professional PDF from a DOM element.
// //  * Optimized for international standards: High DPI, No modern CSS conflicts.
// //  */
// // export const downloadMarketInsights = async (elementId, fileName = "JiViKa-Report.pdf") => {
// //   const element = document.getElementById(elementId);
// //   if (!element) {
// //     console.error(`Element with ID ${elementId} not found.`);
// //     return;
// //   }

// //   try {
// //     const canvas = await html2canvas(element, {
// //       scale: 2, // Boosts resolution for professional printing
// //       useCORS: true, // Allows external images/assets
// //       allowTaint: true,
// //       backgroundColor: "#ffffff", // Forces white background to prevent transparency issues
      
// //       // CRITICAL FIX: The onclone function cleans the CSS before the "screenshot" is taken
// //       onclone: (clonedDoc) => {
// //         const clonedElement = clonedDoc.getElementById(elementId);
        
// //         // 1. Force standard light color scheme
// //         clonedElement.style.colorScheme = 'light';

// //         // 2. Deep clean all elements of modern CSS functions like oklch
// //         const allElements = clonedElement.getElementsByTagName("*");
// //         for (let i = 0; i < allElements.length; i++) {
// //           const el = allElements[i];
// //           const computedStyle = window.getComputedStyle(el);

// //           // Force replace any oklch or modern color variables with fallbacks
// //           // html2canvas crashes when it sees "oklch" in the computed style string
// //           if (computedStyle.color.includes('oklch')) {
// //             el.style.color = '#1e293b'; // Default Slate-800
// //           }
// //           if (computedStyle.backgroundColor.includes('oklch')) {
// //             el.style.backgroundColor = '#ffffff'; // Default White
// //           }
// //           if (computedStyle.borderColor.includes('oklch')) {
// //             el.style.borderColor = '#e2e8f0'; // Default Slate-200
// //           }

// //           // Remove modern transitions/filters that might confuse the parser
// //           el.style.transition = 'none';
// //           el.style.animation = 'none';
// //           el.style.filter = 'none';
// //         }
// //       }
// //     });

// //     // Convert canvas to Image
// //     const imgData = canvas.toDataURL('image/png');
    
// //     // Initialize PDF (A4 size, Portrait)
// //     const pdf = new jsPDF({
// //       orientation: 'portrait',
// //       unit: 'mm',
// //       format: 'a4'
// //     });

// //     // Calculate dimensions to maintain aspect ratio on A4
// //     const pdfWidth = pdf.internal.pageSize.getWidth();
// //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

// //     // Add image to PDF
// //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    
// //     // Download the file
// //     pdf.save(fileName);

// //   } catch (error) {
// //     console.error("JiViKa PDF Engine Error:", error.message);
// //     alert("Could not generate PDF. Please try again in a different browser.");
// //   }
// // }

// // src/features/salary/utils/downloadPdf.js
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export const downloadMarketInsights = async (elementId, fileName = "JiViKa-Report.pdf") => {
//   const element = document.getElementById(elementId);
//   if (!element) return;

//   try {
//     const canvas = await html2canvas(element, {
//       scale: 2,
//       useCORS: true,
//       logging: false,
//       backgroundColor: "#ffffff",
//       onclone: (clonedDoc) => {
//         // Find all elements in the cloned document
//         const elements = clonedDoc.getElementsByTagName("*");
//         for (let i = 0; i < elements.length; i++) {
//           const el = elements[i];
//           // Remove potential oklch-based styles that Tailwind injects
//           el.style.borderColor = el.style.borderColor.replace(/oklch/g, 'rgb');
//           el.style.backgroundColor = el.style.backgroundColor.replace(/oklch/g, 'rgb');
//           el.style.color = el.style.color.replace(/oklch/g, 'rgb');
//         }
//       }
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');
    
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save(fileName);
//   } catch (error) {
//     console.error("PDF Generation Error:", error);
//   }
// };


// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// export const downloadMarketInsights = async (elementId, fileName = "JiViKa-Negotiation-Strategy.pdf") => {
//   const element = document.getElementById(elementId);
//   if (!element) return;

//   try {
//     const canvas = await html2canvas(element, {
//       scale: 2,
//       useCORS: true,
//       logging: false,
//       backgroundColor: "#ffffff",
//       // THE FIX: We manually reset styles to standard hex/rgb in the cloned document
//       onclone: (clonedDoc) => {
//         const elements = clonedDoc.getElementById(elementId).getElementsByTagName("*");
        
//         for (let i = 0; i < elements.length; i++) {
//           const el = elements[i];
          
//           // Instead of .replace (which fails if oklch is a function), 
//           // we force standard colors for the PDF version
//           const style = window.getComputedStyle(el);

//           // Force standard Slate/Gray if the browser reports an oklch value
//           if (style.color.includes('oklch')) {
//             el.style.color = "#1e293b"; // Standard Slate-800
//           }
          
//           if (style.backgroundColor.includes('oklch')) {
//             // If it's a card/box, make it white or a standard light gray hex
//             el.style.backgroundColor = "#ffffff"; 
//           }

//           if (style.borderColor.includes('oklch')) {
//             el.style.borderColor = "#e2e8f0"; // Standard Slate-200
//           }

//           // Disable modern CSS effects that html2canvas doesn't support
//           el.style.transition = 'none';
//           el.style.animation = 'none';
//           el.style.filter = 'none';
//         }
//       }
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'mm', 'a4');
    
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save(fileName);
//   } catch (error) {
//     console.error("JiViKa PDF System Error:", error);
//     alert("PDF generation failed. Please use a standard color theme.");
//   }
// };

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadMarketInsights = async (
  elementId,
  fileName = "JiViKa-Negotiation-Strategy.pdf"
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    // ✅ STEP 1: Clone element (VERY IMPORTANT)
    const clone = element.cloneNode(true);

    // ✅ STEP 2: REMOVE SVG (BIGGEST ERROR SOURCE)
    clone.querySelectorAll("svg").forEach((el) => el.remove());

    // ✅ STEP 3: REMOVE ALL CLASSES (kills Tailwind completely)
    clone.querySelectorAll("*").forEach((el) => {
      el.className = ""; // 🔥 removes Tailwind → no oklch
    });

    // ✅ STEP 4: APPLY SAFE STYLES ONLY
    clone.querySelectorAll("*").forEach((el) => {
      el.style.color = "#000";
      el.style.backgroundColor = "#fff";
      el.style.border = "1px solid #ccc";
      el.style.boxShadow = "none";
    });

    // ✅ STEP 5: Create hidden container
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "-10000px";
    container.style.left = "-10000px";
    container.style.background = "#fff";

    container.appendChild(clone);
    document.body.appendChild(container);

    // ✅ STEP 6: Generate canvas ONLY from clean DOM
    const canvas = await html2canvas(clone, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    // ✅ STEP 7: Cleanup
    document.body.removeChild(container);

    // ✅ STEP 8: Convert to PDF
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save(fileName);
  } catch (error) {
    console.error("PDF Generation Error:", error);
  }
};