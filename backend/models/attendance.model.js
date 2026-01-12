import db from "../config/database.js";

export const getAllAttendence = (callback) => {
  const query = "SELECT * FROM attendance";
  db.query(query, callback);
};
