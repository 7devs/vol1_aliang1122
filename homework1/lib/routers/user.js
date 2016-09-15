var router = require('express').Router();
userModel = require('../models/users.js');

router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(userModel);
    });

router.route('/ageAvg')
    .get(function(req, res, next) {
        var n = userModel.length,
            ageAvg, sum = 0;
        for (var i = 0; i < n; i++) {
            sum += userModel[i].age;
        }
        ageAvg = sum / n;
        res.status(200).send("average age: " + ageAvg.toString());
    });

router.route('/search')
    .get(function(req, res, next) {
        var comp = req.query.company;
        var regex = new RegExp(comp, 'i');
        var result = [];
        for (var i = 0; i < userModel.length; i++) {
            if (regex.test(userModel[i].company)) {
                var name = userModel[i].firstName + " " + userModel[i].lastName
                result.push(name);
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
            console.log('err');
            if (idx >= 0 && idx < userModel.length) {
                var name = userModel[idx].firstName + " " + userModel[idx].lastName;
                res.status(200).send(name);
            } else {
                res.status(404).send('Not Exist');
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
                var user = userModel[idx];
                var newAge = parseInt(req.body.age, 10);
                if (Number.isNaN(newAge) === false) {
                    user.age = newAge;
                    res.status(200).send(user);
                } else {
                    res.send('Typeof age must be number');
                }
            } else {
                res.status(404).send('Not Found');
            }
        } else {
            res.status(400).send('Bad Request');
        }
    });

router.route('/count/:sex')
    .get(function(req, res, next) {
        var sex = req.params.sex;
        var count = 0;
        if (sex === 'male' || sex === 'female') {
            for (var i = 0; i < userModel.length; i++) {
                if (userModel[i].sex === sex) {
                    count++;
                }
            }
            res.status(200).send(sex + ": " + count);
        } else {
            res.status(200).send('sex should be male or female');
        }

    });


module.exports = router;
