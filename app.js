const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/about');



app.listen(3000,() => {
    console.log('the application is running on localhost:3000!');
});