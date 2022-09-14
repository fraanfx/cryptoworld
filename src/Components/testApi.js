const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/exchanges',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '31c24c65d4mshd1f625cba8f9b22p19e373jsn996c21921aa8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.totalMarketCap);
}).catch(function (error) {
	console.error(error);
});










