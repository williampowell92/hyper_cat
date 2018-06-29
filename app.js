/* eslint no-console: 0 */
const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/views/index.html')));

app.listen(8000, () => console.log('Listening to port 8000!'));
