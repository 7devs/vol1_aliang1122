var router = require('express').Router();
albumModel = require('../models/albums.js');

router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(albumModel);
    });

router.route('/longerSong')
    .get(function(req, res, next) {
        var n = albumModel.length,
            result = [];
        for (var i = 0; i < n; i++) {
            if (albumModel[i].length / 60 > 3) {
                result.push(albumModel[i]);
            }
        }
        res.status(200).send(result);
    });

router.route('/search')
    .get(function(req, res, next) {
        var type = req.query.type;
        var result = [];
        for (var i = 0; i < userModel.length; i++) {
            if (type === albumModel[i].type) {
                result.push(albumModel[i]);
            }
        }
        if (result.length !== 0) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Not Found');
        }
    });

router.route('/:id')
    .get(function(req, res, next) {
        var id = req.params.id;
        var idx = parseInt(id, 10) - 1;
        if (Number.isNaN(idx) === false) {

            if (idx >= 0 && idx < albumModel.length) {
                res.status(200).send(albumModel[idx]);
            } else {
                res.status(404).send('Not Found');
            }
        } else {
            res.status(400).send('Bad Request');
        }
    });

router.route('/:id')
    .put(function(req, res, next) {
        var id = req.params.id;
        var idx = parseInt(id, 10) - 1;
        if (Number.isNaN(idx) === false) {
            if (idx >= 0 && idx < userModel.length) {
                var album = albumModel[idx];
                var newTitle = req.body.title;
                var newLength = parseInt(req.body.length,10);
                album.title = newTitle;
                if(Number.isNaN(newLength)===true){
                  res.status(400).send('typeof length should be a number');
                }else{
                  album.length = newLength;
                  res.status(200).send(album);
                }
            } else {
                res.status(404).send('Not Found');
            }
        } else {
            res.status(400).send('Bad Request');
        }
    });

router.route('/singer/:name')
    .get(function(req, res, next) {
        var name = req.params.name;
        var result = [];
        for (var i = 0; i < userModel.length; i++) {
            if (albumModel[i].singer === name) {
                result.push(albumModel[i]);
            }
        }
        if (result.length !== 0) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Not Found');
        }
    });


module.exports = router;
