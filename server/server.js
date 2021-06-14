import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const server = express();

const apiKey = process.env.API_KEY;

const getNews = () => {
  let news;
  fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=910c6caaee6945439c19ae099321f342`
  )
    .then((results) => results.json())
    .then((data) => (news = data));
  return news;
};

server.use(cors());

server.get('/news', (req, res) => res.json(getNews()));

server.get('/', (req, res) => res.json('Server is up and running'));

server.listen(4000);

// import fetch from 'node-fetch'

// const apiKey = process.env.API_KEY;

// https://newsapi.org/v2/everything?q=bitcoin&from=2021-05-11&sortBy=publishedAt&apiKey=apiKey

// https://newsapi.org/v2/everything?q=bitcoin&from=2021-05-11&sortBy=publishedAt&apiKey + apiKey).then().then()

// http://localhost:4000/news
