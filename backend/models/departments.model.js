import db from '../config/database.js';

export const getAllDepartments = (callback) => {
  const query = "SELECT * FROM departments";
  db.query(query, callback);
};
