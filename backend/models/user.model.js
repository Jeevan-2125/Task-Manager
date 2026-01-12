import db from "../config/database.js";

export const getAllUsers = (callback) => {
  const query = "SELECT * FROM users";
  db.query(query, callback);
};
