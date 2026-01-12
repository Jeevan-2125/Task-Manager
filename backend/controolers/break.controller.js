import {getAllBreaks} from "../models/break.model.js";

export const getBreaks = (req, res) => {
    getAllBreaks((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
