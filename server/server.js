import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/', (req, res) => res.json('Server is up and running'));

server.listen(4000);

// import fetch from 'node-fetch'

// const apiKey = process.env.API_KEY;
// https://newsapi.org/v2/everything?q=bitcoin&from=2021-05-11&sortBy=publishedAt&apiKey=910c6caaee6945439c19ae099321f342
// fetch(apiAddress + apiKey).then().then()

// http://localhost:4000/news
