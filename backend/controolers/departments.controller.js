import {getAllDepartments} from "../models/departments.model.js";

export const getDepartments = (req, res) => {
    getAllDepartments((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
