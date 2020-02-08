const db = require('../db');
module.exports.products = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    var begin = (page -1)*perPage;
    var end = page*perPage
    res.render('products/products', {
        products: db.get('products').value().slice(begin,end)
    });
};