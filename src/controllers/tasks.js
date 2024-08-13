import { Task } from "../database/Models/index.js";

/**
 *  Get all tasks from the database and send them as a response
 * @param {*} req
 * @param {*} res
 */
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().toArray();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**
 * Add a new task to the database
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const addTask = async (req, res) => {
  // Extract the title from the request body
  const { title } = req.body;

  // Check if the title is not provided
  if (!title) {
    return res.status(400).send({ message: "Title is required" });
  }

  try {
    const task = await Task.insertOne({ title });

    res.status(201).send(task);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getSingleTask = (req, res) => {
  res.send("Single task");
};
