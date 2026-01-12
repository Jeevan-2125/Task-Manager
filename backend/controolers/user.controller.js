import {getAllUsers} from "../models/user.model.js";

export const getUsers = (req, res) => {
  getAllUsers((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
