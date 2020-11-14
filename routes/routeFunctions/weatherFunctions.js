const dotenv = require('dotenv');

dotenv.config();
const { HOST, KEY } = process.env;

// eslint-disable-next-line max-len
const getDailyOverview = (obj) => obj.forecast.forecastday.map((day) => ({ date: day.date, day: day.day }));

const aggregateData = (obj) => {
  const daily = getDailyOverview(obj);
  return {
    location: obj.location,
    currentWeather: obj.current,
    daily,
  };
};

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: { q: 'London', days: '3' },
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
  },
};

module.exports = {
  aggregateData,
  options,
};
