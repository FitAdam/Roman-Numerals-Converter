const express = require("express");
const bodyParser = require("body-parser");
//const script = require(__dirname + "/script.js");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/css/'));
app.use(express.static(__dirname + '/public/javascript/'));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});


/*
app.post("/", function(req, res){
    res.send("Thanks for data...");
});
*/
app.listen(3000, function(){
    //console.log("Server is running on port 3000");
});

