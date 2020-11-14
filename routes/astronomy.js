const Router = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const astronomy = Router();
const { options } = require('./routeFunctions/astronomyFunctions');

astronomy.get('/', (req, res) => {
  options.params.q = req.query.q;
  axios.request(options)
    .then((resp) => {
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = {
  astronomy,
};
