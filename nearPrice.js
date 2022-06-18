var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=near&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=24h\n',
  'headers': {
    'Cookie': 'datadome=Kp~Tg5AvvW9TdiqC8qOwNscyb6hFNiiWrfdKtgvp.REQ8tKA7F6fvBNycfkf03mUp2qVrAfCRySu2dIOTsYgHexbd0zPDyvJs-uAIM4dxT-a15gpVMTDl9E.HSQAGgN'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
