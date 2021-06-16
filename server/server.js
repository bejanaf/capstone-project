import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const server = express();

dotenv.config();
const apiKey = process.env.API_KEY;

let news = [];

fetch(
  `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=${apiKey}`
)
  .then((results) => results.json())
  .then((data) => (news = data.articles.slice(0, 20)));

server.use(cors());

server.get('/news', (req, res) => res.json(news));

server.get('/', (req, res) => res.json('Server is up and running'));

server.listen(4000);
