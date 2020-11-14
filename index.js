const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { weather } = require('./routes/weather');
const { astronomy } = require('./routes/astronomy');

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
app.use('/weather', weather);

app.use('/astronomy', astronomy);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Please use /weather route to get the forecast. use /astronomy to get astronomical data',
  });
});
