import express from "express";
import { homeRouter, tasksRouter } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT | 3005;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * RouteS to the home page ("/", "/about", "/contact")
 */
app.use("/", homeRouter);

/**
 * RouteS to the tasks page ("/tasks", "/tasks/new", "/tasks/:id")
 */
app.use("/tasks", tasksRouter);

/**
 * Route to handle 404 errors
 */
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// TODO: use custom middleware to handle errors

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
