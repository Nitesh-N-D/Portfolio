// // const express = require("express");
// // const cors = require("cors");

// // const projectRoutes = require("./routes/projectRoutes");
// // const experienceRoutes = require("./routes/experienceRoutes");
// // const certificationRoutes = require("./routes/certificationRoutes");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // app.use("/api/projects", projectRoutes);
// // app.use("/api/experience", experienceRoutes);
// // app.use("/api/certifications", certificationRoutes);

// // app.listen(5000, () => {
// //   console.log("Backend running on http://localhost:5000");
// // });
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import projectRoutes from "./routes/projectRoutes.js";
// import experienceRoutes from "./routes/experienceRoutes.js";
// import certificationRoutes from "./routes/certificationRoutes.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/projects", projectRoutes);
// app.use("/api/experience", experienceRoutes);
// app.use("/api/certifications", certificationRoutes);

// app.get("/", (req, res) => {
//   res.send("Nitesh Labs Backend Running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log("Backend running on port", PORT));
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const certificationRoutes = require("./routes/certificationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/certifications", certificationRoutes);

// Health check route for Render
app.get("/", (req, res) => {
  res.send("Nitesh Labs Backend Running");
});

// IMPORTANT: Use Render's dynamic port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
