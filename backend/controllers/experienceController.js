const db = require("../config/db");

exports.getExperience = (req, res) => {
  db.query("SELECT * FROM experience ORDER BY start_date DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
