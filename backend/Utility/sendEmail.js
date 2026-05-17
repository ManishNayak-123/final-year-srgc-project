import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";

// This force-loads the .env file from your backend root
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const sendRegistrationEmail = async (userEmail, userName, role) => {
    try {
        // --- SAFETY CHECK ---
        // If these print as 'undefined' in your terminal, the .env file is not being read
        console.log("CHECK -> Email:", process.env.ADMIN_EMAIL);
        console.log("CHECK -> Pass exists:", !!process.env.ADMIN_PASSWORD);

        if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
            throw new Error("Missing Email Credentials in .env file");
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_PASSWORD,
            },
        });

        const mailOptions = {
            from: `"JiViKa Team" <${process.env.ADMIN_EMAIL}>`,
            to: userEmail,
            subject: "Welcome to JiViKa!",
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #f0f0f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="background-color: #387780; padding: 40px 20px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: -1px;">Welcome to the Journey!</h1>
                    </div>
                    <div style="padding: 40px; background-color: #ffffff; color: #333; line-height: 1.6;">
                        <h2 style="color: #333;">Hello, ${userName}!</h2>
                        <p style="font-size: 16px;">We’re excited to confirm that you’ve successfully registered as a <strong style="color: #ff9933; text-transform: capitalize;">${role}</strong> on <strong>JiViKa</strong>.</p>
                        <p style="font-size: 16px;">Whether you're looking for your next career move or building a world-class team, our platform is here to empower your goals.</p>
                        
                        <div style="text-align: center; margin: 40px 0;">
                            <a href="http://localhost:5173/login" style="background-color: #ff9933; color: white; padding: 15px 35px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; display: inline-block;">Go to Dashboard</a>
                        </div>
                        
                        <p style="font-size: 14px; color: #888;">If you didn't create this account, you can safely ignore this email.</p>
                    </div>
                    <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                        <p style="font-size: 12px; color: #aaa; margin: 0;">&copy; 2026 JiViKa Career Portal. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent: " + info.response);
        return true;
    } catch (error) {
        console.error("Internal Email Error:", error.message);
        throw error;
    }
};

export default sendRegistrationEmail;