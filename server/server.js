import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const server = express();

const apiKey = process.env.API_KEY;

fetch(
  `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=${apiKey}`
)
  .then((results) => results, json())
  .then((data) => data);

server.use(cors());

server.get('/', (req, res) => res.json('Server is up and running'));

server.listen(4000);

// import fetch from 'node-fetch'

// const apiKey = process.env.API_KEY;

// https://newsapi.org/v2/everything?q=bitcoin&from=2021-05-11&sortBy=publishedAt&apiKey=apiKey

// https://newsapi.org/v2/everything?q=bitcoin&from=2021-05-11&sortBy=publishedAt&apiKey + apiKey).then().then()

// http://localhost:4000/news
