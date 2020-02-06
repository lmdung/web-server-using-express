const express = require('express');
const bodyParser = require('body-parser')

const userRouter = require('./routers/user.router')
const app = express();
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (request, response) => {
    response.render('index', {
        name: "",
    });
})
app.use('/users', userRouter);
app.use(express.static('public'));
app.listen(port, () => {
    console.log('server listening on port: ', port);
});

