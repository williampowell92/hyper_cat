/* eslint no-console: 0 */
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8000;

const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/views/index.html')));
app.get('/game', (req, res) => res.sendFile(path.join(__dirname, './public/views/game.html')));
app.get('/win', (req, res) => res.sendFile(path.join(__dirname, './public/views/win.html')));
app.get('/lose', (req, res) => res.sendFile(path.join(__dirname, './public/views/lose.html')));

app.listen(PORT, () => console.log(`Listening to port ${PORT}!`));
