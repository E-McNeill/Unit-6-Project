const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;
const app = express();

//renders the homepage
router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index', {projects});
});

//renders the about page
router.get('/about', (req, res) => {
    res.render('about');
});

//renders the specifc project page IF it exists. If not, error page is rendered.
router.get('/project/:id', (req, res) => {
   const id = req.params.id;
   if (isNaN(id) || ((id < 0) || (id >= projects.length))) {
    res.redirect('/error');
   } else {
       res.locals.project = projects[`${id}`];
       res.render('project', projects[id]);
   }
    
});

module.exports = router;