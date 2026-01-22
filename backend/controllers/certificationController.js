const db = require("../config/db");

exports.getCertifications = (req, res) => {
  db.query("SELECT * FROM certifications ORDER BY issued_date DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};
