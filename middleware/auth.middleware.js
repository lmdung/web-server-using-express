var db = require('../db');
module.exports.requireAuth = (req, res, next) => {
    if (!req.signedCookies.userID) {
        res.redirect('/auth/login');
    };
    var user = db.get('users').find({ id: req.signedCookies.userID }).value();
    if (!user) {
         res.redirect('/auth/login');
    }
    
    next();
}