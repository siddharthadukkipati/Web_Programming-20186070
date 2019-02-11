var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
const express = require("express");
const path = require("path");
const posts1 = require("./test.json");

//Find all at once
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("users").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result[0]);
//     db.close();
//   });
// });
//=====================================INSERT INTO USERS=================================================
// var item = {
//   // title: req.body.title,
//   // content: req.body.content,
//   // author: req.body.author,

//   firstname: "Praneetha",
//   lastname: "Lakshi",
//   email: "praneetha@g.com",
//   mobileno: "1234567890",
//   password: "praneetha",
//   loginstatus: false,
//   address: ["IITH Parijath"],
//   oldorders: [],
//   cart: []
// };

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("users").insertOne(item, function(err, result) {
//     if (err) throw err;
//     console.log("Item inserted");
//     db.close();
//   });
// });

//=======================================================================================================

//update the value
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { userdata: "Valley 345" };
//   var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

//======================================================================================



// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("products", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });
//=======================================entering into data base===============================================

// entering into data base


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "v akhil", address: "kumar" };
//   // var myobj2 =posts1;
//   dbo.collection("users").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
//======================================================================================

// find One

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("users").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

//======================================================================================


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("products").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });
