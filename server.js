var express = require("express");
var bodyParser = require("body-parser");


var server = express();


var excuse = require("./controller/dataScrape");


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));


server.get("/", function(req, res){
	res.sendFile("/main.html", {root: "./public/"})
});

server.get("/getExcuse", excuse.getExcuse);

var port = 3000;
server.listen(port, function(){
	console.log("server running on port " + port);
});