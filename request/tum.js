import mysql from "mysql2";
import dbconfig from "../config/database.js";
const connection = mysql.createConnection(dbconfig);

const createTumDB = async () => {
  connection.query(
    "CREATE TABLE tum (id INT(11) NOT NULL AUTO_INCREMENT, usd FLOAT, krw FLOAT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))",
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};

const insertTumDB = async () => {
  connection.query(
    "INSERT INTO tum(usd, krw) VALUES((SELECT(SELECT tum_each FROM tum_each WHERE name_id = 1 ORDER BY created_at DESC LIMIT 1)+(SELECT tum_each FROM tum_each WHERE name_id = 5 ORDER BY created_at DESC LIMIT 1) FROM tum_each ORDER BY created_at DESC LIMIT 1), (SELECT(SELECT tum_each FROM tum_each WHERE name_id = 1 ORDER BY created_at DESC LIMIT 1)+(SELECT tum_each FROM tum_each WHERE name_id = 5 ORDER BY created_at DESC LIMIT 1)* 1300));",
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};

// createTumDB();
insertTumDB();
