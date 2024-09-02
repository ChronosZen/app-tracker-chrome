import express from "express";
import connectMongoDB from "./app/config/db.js";
import ApplicationRouter from "./app/routes/Application.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Connect to database
connectMongoDB();

// Routes
app.use("/application", ApplicationRouter);
// app.use("/resources", resourcesRouter);
// app.use('/noisecheck', NoiseCheck);
// app.use('/hearingage', HearingAge);

// Root route
app.get("/", (req, res) => {
  res.send("Hello, Application Tracker!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
