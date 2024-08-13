import { Task } from "../database/Models/index.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().toArray();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addTask = async (req, res) => {
  const { title } = req.body;

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
