const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

// Router for lists movies function
router.get('/list', movieController.movieList);

// Router for movie details function
router.get('/details/:id', movieController.details);

// Routers for edit functions
router.get('/edit/:id', movieController.displayEditPage);
router.post('/edit/:id', movieController.processEditPage);

// Router for Delete function
router.get('/delete/:id', movieController.performDelete);

// Routers for Add functions
router.get('/add', movieController.displayAddPage);
router.post('/add', movieController.processAddPage);


module.exports = router;