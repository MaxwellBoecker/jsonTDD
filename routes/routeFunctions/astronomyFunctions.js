const dotenv = require('dotenv');

dotenv.config();
const { HOST, KEY } = process.env;

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
  params: { q: 'London' },
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
  },
};

module.exports = {
  options,
};
