var express = require("express");
var app = express();


//*********************************************** */
/** Server Configuration */


/*************************************************
 */
// render HTML from the endpoints
var ejs = require("ejs");
app.set("views", __dirname + "/public");
app.engine("html", ejs.renderFile);
app.set("view engine", ejs);

//server static file (js, css, img, pdf)
app.use(express.static(__dirname+"/public"));


//Server HTML

app.get("/", function(req, res){
    res.render("index.html");
});
// create the /admin endpoint
//server the admin.html

app.get("/admin", function(req, res){
    res.render("admin.html");
});

app.get("/about", function(req, res){
    res.send("<h1 style='color:blue'>Terri Woods!</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1 style='color:blueviolet'>Please contact me at 318-820-9371!</h1>");
});


//start the prodject
app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});

//CTRL + C: to kill the server
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://www.restapitutorial.com/httpstatuscodes.html

