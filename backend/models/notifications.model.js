import db from '../config/database.js';

export const getAllNotifications = (callback) => {
  const query = "SELECT * FROM notifications";
  db.query(query, callback);
};
