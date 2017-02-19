var express = require('express');
var app = express();
MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')

app.use( bodyParser.json() );

var db

MongoClient.connect('mongodb://sonallamba:Sonal@ds157459.mlab.com:57459/wuberdb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  });
});

app.post('/location', (req, res) => {
  db.collection('location').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
	res.send("Thanks for posting")
  })
})


app.get('/', (req, res) => {
  var result = db.collection('location').find().toArray(function(err, items) {
  	res.json(items)
  })
})


// db.collection('location').find().toArray(function(err, results) {
//   console.log(results)
//   results.send(JSON.stringify
//   // send HTML file populated with quotes here
// })
