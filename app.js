const express = require('express');
const router = express.Router();
const data = require('./data/data.json');
const projects = data.projects;
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.locals.projects = data.projects; //required??
    res.render('index', {projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});


router.get("/projects/:id", (req, res) => {
    const id = req.params.id;
    const myProject = projects[id];
    res.render("project", {myProject});
});

  app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const message = '<h1>Uh oh, something seems to have gone wrong. </h1>';
    const code = 'Status: ' + err.status;
    res.locals.error = err;
    res.status(err.status).send(message + code);
    console.log('There has been a ' + err.status + ' error.')
    //res.render('error');
});
app.listen(3000,() => {
    console.log('the application is running on localhost:3000!');
});

