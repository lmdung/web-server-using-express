const db = require('../db');
const md5 = require('md5');
var User = require('../models/user.model');
module.exports.login = (req, res) => {
    res.render('auth/login');
};
module.exports.portLogin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({ email: email }).value();
    // var user = User.find()
    if (!user) {
        res.render('auth/login', {
            errors: [
                'User does not exist !'
            ],
            values: req.body
        })
        return;
    }
    if (user.password !== md5(password)) {
        res.render('auth/login', {
            errors: [
                'Wrong password !'
            ],
            values: req.body
        })
        return;
    }
    res.cookie('userID', user.id, {
        signed: true
    })
    res.redirect('/users')
};