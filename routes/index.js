const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.render('project', {projects});
});

module.exports = router;