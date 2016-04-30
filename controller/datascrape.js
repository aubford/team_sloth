var cheerio = require("cheerio");
var request = require("request");


var getExcuse = function(){
	var url = "http://programmingexcuses.com";
	request(url, function(error, response, html){
		if(!error){
			$ = cheerio.load(html);
			$("a").each(function(){
				console.log("made it!");
				console.log($this.text());
			})
		}
	})
}



module.exports = {
	getExcuse : getExcuse,
}