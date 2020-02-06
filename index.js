const express = require('express');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const userRouter = require('./routers/user.router')
const authRouter = require('./routers/auth.router')
const authMiddleware = require('./middleware/auth.middleware')
const app = express();
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', './views')

//router
app.get('/', (request, response) => {
    response.render('index', {
        name: "",
    });
})
app.use('/users',authMiddleware.requireAuth, userRouter);
app.use('/auth', authRouter);


app.use(express.static('public'));
app.listen(port, () => {
    console.log('server listening on port: ', port);
});

