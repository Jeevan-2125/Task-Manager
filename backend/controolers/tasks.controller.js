import { getAlltasks } from "../models/tasks.model.js";

export const getTasks = (req, res) => {
    getAlltasks((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
