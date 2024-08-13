import express from "express";
import { homeRouter, tasksRouter } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT | 3005;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * route: /
 * route: /about
 * route: /contact
 */
app.use("/", homeRouter);

/**
 * route: get /tasks
 * route: /tasks/new
 * route: /tasks/:id
 */
app.use("/tasks", tasksRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// TODO: use custom middleware to handle errors

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
