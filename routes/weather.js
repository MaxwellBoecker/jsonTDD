const { Router } = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const { aggregateData, options } = require('./routeFunctions/weatherFunctions');

dotenv.config();
const weather = Router();

weather.get('/', (req, res) => {
  options.params.q = req.query.q;
  options.params.days = req.query.days;
  axios.request(options)
    .then((resp) => {
      const parsed = aggregateData(resp.data);
      res.status(200).send(parsed);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = {
  weather,
};
