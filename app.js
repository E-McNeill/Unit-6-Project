const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');

app.use(mainRoutes);
app.use('/about', aboutRoutes);

app.listen(3000,() => {
    console.log('the application is running on localhost:3000!');
});