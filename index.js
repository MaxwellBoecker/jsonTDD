const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const { PORT } = process.env;
const app = express();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Hello!'
  });
});