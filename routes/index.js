const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const projects = data.projects;
const app = express();

router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index', {projects});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
   const id = req.params.id;
        res.locals.project = projects[`${id}`];
       res.render('project', projects[id]);
       // res.render('project');
    
});

module.exports = router;