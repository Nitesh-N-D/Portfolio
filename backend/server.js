const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const certificationRoutes = require("./routes/certificationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/certifications", certificationRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
