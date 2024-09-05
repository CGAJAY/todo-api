import express from "express";
import { homeRouter, tasksRouter } from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { configDotenv } from "dotenv";
import { connectDB } from "./database/connect.js";
import { seeders } from "./database/Seeders/index.js";

configDotenv(); // Load environment variables

await connectDB(); // connect to the database

await seeders.up(); // seed the database

const app = express();
const PORT = process.env.PORT | 3005;

app.use(express.json()); // required to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // required to parse form data

// required to use __dirname with ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/assets", express.static(__dirname + "/assets/")); // serve static files (images, css, js) from the assets directory

// Routes to the public pages ("/", "/about", "/contact")
app.use("/", homeRouter);

// Routes to the tasks pages ("/tasks", "/tasks/new", "/tasks/:id")
app.use("/tasks", tasksRouter);

// Middleware to handle all other routes (404)
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// TODO: use custom middleware to handle errors

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
