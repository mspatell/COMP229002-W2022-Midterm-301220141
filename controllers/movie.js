// Meetkumar Patel (301220141)
// Movie Controller - Handles all movie-related operations

const Movie = require('../models/movie');
const { asyncHandler } = require('../middleware/errorHandler');

// Gets all movies from the Database and renders the page to list all movies.
exports.movieList = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.render('movie/list', {
        title: 'Movie List', 
        movies
    });
});

exports.details = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        return res.status(404).render('error', { message: 'Movie not found' });
    }
    res.render('movie/details', {
        title: 'Movie Details', 
        movie
    });
});

exports.displayAddPage = (req, res) => {
    res.render('movie/add_edit', {
        title: 'Add a new movie',
        movie: new Movie()
    });
};

exports.processAddPage = asyncHandler(async (req, res) => {
    const { Title, Synopsis, Year, Director, Genre } = req.body;
    const newMovie = new Movie({ Title, Synopsis, Year, Director, Genre });
    await newMovie.save();
    res.redirect('/movie/list');
});

exports.displayEditPage = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        return res.status(404).render('error', { message: 'Movie not found' });
    }
    res.render('movie/add_edit', {
        title: 'Edit Movie', 
        movie
    });
});

exports.processEditPage = asyncHandler(async (req, res) => {
    const { Title, Synopsis, Year, Director, Genre } = req.body;
    await Movie.findByIdAndUpdate(req.params.id, { Title, Synopsis, Year, Director, Genre });
    res.redirect('/movie/list');
});

exports.performDelete = asyncHandler(async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movie/list');
});