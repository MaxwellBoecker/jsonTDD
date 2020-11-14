const Router = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const { HOST, KEY } = process.env;
const astronomy = Router();

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
  params: { q: 'London' },
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
  },
};

astronomy.get('/', (req, res) => {
  options.params.q = req.query.q;
  axios.request(options)
    .then((resp) => {
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = {
  astronomy,
};
