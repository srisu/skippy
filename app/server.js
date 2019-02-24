var express = require('express');
var mongo = require('mongodb');
var app = express ();
const port = 1010; //port to be mentioned for the server to start

//Initializing the server in the port specified above
app.listen(port,()=>console.log(`Starting Server at port ${port}..... access this using "http://localhost:${port}"`));

//loding entry point index.js
app.get('',(req,res)=>res.sendfile('index.html'));

//establishing database connectivity to mongodb.Specify the URL and the port on which the mongo server runs
//var MongoClient = mongo.MongoClient;
const db_port = 27017;
var db_name = 'skippy';
var url = `mongodb://localhost:${db_port}/${db_name}`;

mongo.MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db){
  if (err) throw err;
  console.log("Connected to Mongodb server through the specified port.....");
  db.close();
});