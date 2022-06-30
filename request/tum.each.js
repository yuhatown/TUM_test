import mysql from "mysql2";
import dbconfig from "../config/database.js";
const connection = mysql.createConnection(dbconfig);

const createTumEachDB = async () => {
  connection.query(
    "CREATE TABLE tum_each (id INT(11) NOT NULL AUTO_INCREMENT, name_id INT(11), tum_each FLOAT, created_at TIMESTAMP, PRIMARY KEY(id), FOREIGN KEY(name_id) REFERENCES token(id))",
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};

const insertEthereumTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (1 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 1 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};

const insertSolanaTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (2 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 2 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertStetherTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (3 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 3 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertMaticTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (4 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 4 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertNearTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (5 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 5 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertCosmosTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (6 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 6 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertThegraphTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (7 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 7 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertCeloTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (8 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 8 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertMinaTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (9 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 9 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertOsmosisTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (10 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 10 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertPersistenceTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (11 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 11 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};
const insertCertikTumEach = () => {
  connection.query(
    `INSERT INTO tum_each(name_id, tum_each) VALUES (12 ,(SELECT wallet_staked.staked * token_price.price as ethTUM FROM wallet_staked LEFT JOIN token_price ON token_price.name_id = wallet_staked.name_id WHERE wallet_staked.name_id = 12 ORDER BY token_price.id DESC, wallet_staked.id DESC limit 1));`,
    function (err, results, fields) {
      console.log(err);
      console.log(results);
    }
  );
};

// createTumEachDB();
insertEthereumTumEach();
// insertSolanaTumEach();
// insertStetherTumEach();
// insertMaticTumEach();
insertNearTumEach();
// insertCosmosTumEach();
// insertThegraphTumEach();
// insertCeloTumEach();
// insertMinaTumEach();
// insertOsmosisTumEach();
// insertPersistenceTumEach();
// insertCertikTumEach();
