module.exports.portCreate = (req, res, next) => {
    let errors = [];
    if(!req.body.name || req.body.name.trim() === '') {
        errors.push("Name is required")
    };
    if(!req.body.phone || req.body.phone.trim() ==='') {
        errors.push("Phone is required")
    }
    if (errors.length) {
        res.render('users/create',{
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
}