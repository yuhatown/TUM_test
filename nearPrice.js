var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.coingecko.com/api/v3/coins/near/market_chart?vs_currency=usd&days=1&interval=daily',
  'headers': {
    'Cookie': 'datadome=u_ZeWd55-WmQFSXo2g-rRZcQiIlCCspU.gjU5wjR6BlN3o6K-eX3PGm8hkasyfmOL-MrObz4Eia0SEnHYW0FN8LxME1._mmuQG4bTutcJQC38kPIo7HDKowkwaZHd67'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
