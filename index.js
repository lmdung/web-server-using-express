const express = require('express');
const app = express();
const port = 3000;
app.get('/', function(req,res){
	res.send('Hello world')
})
app.get('/users', function(req, res){
	res.send('user list')
})
app.listen(port, function(){
	console.log('App listening on port ' + port)
})