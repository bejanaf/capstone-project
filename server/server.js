import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const server = express();

dotenv.config();
const apiKey = process.env.API_KEY;

server.use(cors());

server.get('/news', (req, res) => {
  fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=${apiKey}`
  )
    .then((results) => results.json())
    .then((data) => res.json(data.articles.slice(0, 20)));
});

server.listen(4000);
