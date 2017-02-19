var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require("mongoose");

user = require('./models/user');

//connect to mongoose

mongoose.connect("mongodb://localhost/wuberdb");
var db = mongoose.connection;

app.get('/', function(req,res){
	res.send('user added');
});


app.get('/api/user', function(req,res){
	user.getUser(function(err,users)
	{
		if(err){
			throw err;
		}
		res.json(User);

	});
});
app.listen(3000);
console.log('running on port 3000');

