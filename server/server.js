import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import dirname from './lib/pathHelpers.js';

const __dirname = dirname(import.meta.url);

const server = express();

server.get('/health', (req, res) =>
  res.json({ message: 'Server is up and running' })
);

dotenv.config();
const apiKey = process.env.API_KEY;

server.use(cors());

server.get('/api/news', (req, res) => {
  fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=${apiKey}`
  )
    .then((results) => results.json())
    .then((data) => res.json(data.articles.slice(0, 20)));
});

server.use(express.static(path.join(__dirname, '../../client/build')));
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

// Muss ich? Oder zusätzlich in meine api/news?

const port = process.env.PORT || 4000;
server.listen(port);
