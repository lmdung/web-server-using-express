const db = require('../db');
module.exports.products = (req, res) => {
    res.render('products/products', {
        products: db.get('products').value(),
    });
};