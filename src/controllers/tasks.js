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
    const instertedTask = await Task.findOne({ _id: task.insertedId });

    res.status(201).send(instertedTask);
  } catch (err) {
    res.status(500).send(err);
  }
};

/**
 *  Get a single task from the database
 * @param {*} req
 * @param {*} res
 */
export const getSingleTask = async (req, res) => {
  let { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid id" });
  }

  // Convert the string id to ObjectId
  id = ObjectId.createFromHexString(id);

  //  Find task by id
  const task = await Task.findOne({
    _id: id,
  });

  if (!task) {
    return res.status(404).send({ message: "Task not found" });
  }

  res.status(200).send(task);
};
