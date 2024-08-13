import { Router } from "express";
import { addTask, getAllTasks, getSingleTask } from "../controllers/index.js";

const tasksRouter = Router();

/**
 * route: http://localhost:3005/tasks
 */
tasksRouter.get("/", getAllTasks);
tasksRouter.post("/new", addTask);
tasksRouter.get("/:id", getSingleTask);

export { tasksRouter };
