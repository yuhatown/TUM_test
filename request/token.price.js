import request from 'request';
import mysql from 'mysql2';
import dbconfig from '../config/database.js';
const connection = mysql.createConnection(dbconfig);

var options = {
  'method': 'GET',
  'url': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum%2C%20near%2C%20solana%2C%20celo%2C%20certik%2C%20mina-protocol%2C%20the-graph%2C%20matic-network%2C%20persistence%2C%20osmosis%2C%20cosmos%2C%20staked-ether&order=market_cap_desc&per_page=100&page=1&sparkline=false',
  'headers': {
    'Cookie': 'datadome=Kp~Tg5AvvW9TdiqC8qOwNscyb6hFNiiWrfdKtgvp.REQ8tKA7F6fvBNycfkf03mUp2qVrAfCRySu2dIOTsYgHexbd0zPDyvJs-uAIM4dxT-a15gpVMTDl9E.HSQAGgN',
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  var tokenPrice = JSON.parse(response.body);

  tokenPrice.forEach((value, index, array)=>{
    connection.query(`INSERT INTO token_price (name, price, last_updated) VALUES ("${tokenPrice[index].id}", ${tokenPrice[index].current_price}, "${tokenPrice[index].last_updated}");`);
    console.log(`${tokenPrice[index].id} statusCode:`, response && response.statusCode);
  })
});

