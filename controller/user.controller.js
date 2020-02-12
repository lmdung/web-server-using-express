// const db = require('../db');
// const shortid = require('shortid');
var User = require('../models/user.model');

module.exports.index = (req, res) => {
    // res.render('users/index', {
    //     users: db.get('users').value(),
    // });
    User.find().then((users => {
        res.render('users/index', {
            users: users
        })
    }))
};
module.exports.search = (req, res) => {
    const q = req.query.q;
    // const matchedUsers = db.get('users').filter(el => {
    //     return el.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
    // }).value();
    // res.render('users/index', {
    //     users: matchedUsers
    // });
    User.find().then((listUsers => {
        var users = listUsers.filter(el => {
            return el.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        })
        res.render('users/index', {
            users: users
        })
    }))
};
module.exports.create = (req, res) => {
    console.log(req.cookies)
    res.render('users/create')
};
module.exports.viewByID = (req, res) => {
    const id = req.params.id;
    // const user = db.get('users').find({ id: id }).value();
    // res.render('users/view', {
    //     user: user
    // });
    User.findById(id, (err, user) => {
        res.render('users/view', {
            user: user
        })
    })
};
module.exports.postCreate = (req, res) => {
    // req.body.id = shortid.generate();
    // req.body.avatar = req.file.path.split('/').slice(1).join('/');
    // req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    req.body.avatar = req.file.path.replace('public','');
    // kiem tra lai
    // db.get('users').push(req.body).write();
    // res.redirect('/users');
    User.create(req.body)
    res.redirect('/users');
};