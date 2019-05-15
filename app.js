const express = require('express');
const router = express.Router();
const app = express();

// Static route to serve the static files in the public folder
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
app.use(mainRoutes);

//error handling
  app.use((req, res, next) => {
    const err = new Error('Oh no! This page does not exist.');
    err.status = 404 || 500;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status || 500)
    console.log('There has been a ' + err.status + ' error.')
    res.render('error');
});





app.listen(3000,() => {
    console.log('the application is running on localhost:3000!');
});

