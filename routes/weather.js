const { Router } = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const { HOST, KEY } = process.env;
const weather = Router();

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: { q: 'London', days: '3' },
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
  },
};
weather.get('/', (req, res) => {
  options.params.q = req.query.q;
  options.params.days = req.query.days;
  axios.request(options)
    .then((resp) => {
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
});

module.exports = {
  weather,
};
