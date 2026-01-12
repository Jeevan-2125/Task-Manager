import {getAllAttendence} from "../models/attendance.model.js";

export const getAttendence = (req, res) => {
getAllAttendence((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
