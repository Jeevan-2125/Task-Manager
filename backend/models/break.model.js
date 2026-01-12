import db from '../config/database.js';

export const getAllBreaks = (callback) => {
  const query = "SELECT * FROM breaks";
  db.query(query, callback);
};
