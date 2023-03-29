const router = require('express').Router()

const moviesServices = require('./movies.services');

router.get('/movies', moviesServices.getAllmovies)
router.post('/movies', moviesServices.postNewmovies)


router.get('/movies/:id', moviesServices.getMovieById)


module.exports = router