import db from '../config/database.js';

export const getAlltasks = (callback) => {
  const query = "SELECT * FROM tasks";
  db.query(query, callback);
};
