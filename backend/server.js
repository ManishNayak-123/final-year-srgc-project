// // import express from "express";
// import express from "express";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import companyRoutes from "./routes/companyRoutes.js";
// import jobRoutes from "./routes/jobRoutes.js";
// import applicationRoutes from "./routes/applicationRoutes.js";
// import path from "path";


// dotenv.config({});
// const app = express();
// const __dirname = path.resolve();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//   origin:'http://localhost:5173',
//   credentials:true
// }

// app.use(cors(corsOptions));


// app.use("/api/v1/user", authRoutes);
// app.use("/api/v1/company", companyRoutes);
// app.use("/api/v1/job", jobRoutes);
// app.use("/api/v1/application",applicationRoutes);

// app.use(express.static(path.join(__dirname, "/my-project/dist")));

// app.get('*', (_, res) => {
//   res.sendFile(path.resolve(__dirname, "my-project", "dist", "index.html"));
// });


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   connectDB();
//   console.log(`Server running on port ${PORT}`);
// });
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import path from "path";

dotenv.config({});

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/v1/user", authRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);

// frontend static files
app.use(express.static(path.join(__dirname, "my-project", "dist")));

// React routing fix
app.get(/.*/, (_, res) => {
  res.sendFile(path.resolve(__dirname, "my-project", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});