var express = require('express');
var router = express.Router();
var FilmFavorite = require('./../models/film.favorite.model');
var FilmBookMark = require("./../models/film.bookMark.model");

router.get('/favorites', function (req, res) {
    var query = {
        _id: {
            $in: req.query.filmIds.split(',')
        }
    };
    FilmFavorite.find(query, function (err, favorites) {
        if (err) throw err;
        res.send(favorites);
    });
}).post('/favorites', function (req, res) {
    var favorite = new FilmFavorite({
        _id: req.body.filmId,
        favorite: true
    });
    favorite.save(function (err) {
        if (err) throw err;
        res.send(favorite);
    });
}).delete('/:id/favorites', function (req, res) {
    var query = {
        _id: req.params.id
    };
    FilmFavorite.deleteOne(query, function (err) {
        if (err) throw err;
        res.send({
            _id: req.params.filmId
        });
    });
});


router.get('/bookMarks', function (req, res) {
    var query = {
        _id: {
            $in: req.query.filmIds.split(',')
        }
    };
    FilmBookMark.find(query, function (err, favorites) {
        if (err) throw err;
        res.send(favorites);
    });
}).post('/bookMarks', function (req, res) {
    var favorite = new FilmBookMark({
        _id: req.body.filmId,
        favorite: true
    });
    favorite.save(function (err) {
        if (err) throw err;
        res.send(favorite);
    });
}).delete('/:id/bookMarks', function (req, res) {
    var query = {
        _id: req.params.id
    };
    FilmBookMark.deleteOne(query, function (err) {
        if (err) throw err;
        res.send({
            _id: req.params.filmId
        });
    });
});













module.exports = router;