import request from "request";
import mysql from "mysql2";
import dbconfig from "../config/database.js";
const connection = mysql.createConnection(dbconfig);

var options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2C%20near%2C%20solana%2C%20celo%2C%20certik%2C%20mina-protocol%2C%20the-graph%2C%20matic-network%2C%20persistence%2C%20osmosis%2C%20cosmos%2C%20staked-ether&order=market_cap_desc&per_page=100&page=1&sparkline=false",
  headers: {
    Cookie:
      "datadome=Kp~Tg5AvvW9TdiqC8qOwNscyb6hFNiiWrfdKtgvp.REQ8tKA7F6fvBNycfkf03mUp2qVrAfCRySu2dIOTsYgHexbd0zPDyvJs-uAIM4dxT-a15gpVMTDl9E.HSQAGgN",
  },
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  const tokenPrice = JSON.parse(response.body);

  for (let i = 0; i < tokenPrice.length; i++) {
    if (tokenPrice[0].id === "ethereum") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[1].id === "solana") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[2].id === "staked-ether") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[3].id === "matic-network") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[4].id === "near") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[5].id === "cosmos") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[6].id === "the-graph") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[7].id === "celo") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (8${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[8].id === "mina-protocol") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[9].id === "osmosis") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i9].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[10].id === "persistence") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else if (tokenPrice[11].id === "certik") {
      connection.query(
        `INSERT INTO token_price (name_id, price, last_updated) VALUES (${
          i + 1
        }, ${tokenPrice[i].current_price}, "${tokenPrice[i].last_updated}");`
      );
      console.log(response && response.statusCode);
    } else {
      throw new Error("Not Found");
    }
  }
});
