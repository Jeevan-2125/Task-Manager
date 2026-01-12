import { getAllNotifications}  from "../models/notifications.model.js";

export const getNotifications = (req, res) => {
    getAllNotifications((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};
