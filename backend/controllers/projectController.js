const db = require("../config/db");

exports.getProjects = (req, res) => {
  db.query("SELECT * FROM projects", (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};
