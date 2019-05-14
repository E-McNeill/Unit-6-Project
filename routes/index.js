const express = require('express');


router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.render('project', {projects[id]});
});