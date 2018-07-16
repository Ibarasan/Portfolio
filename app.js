var sslRedirect = require('heroku-ssl-redirect');
var express = require("express");
var app = express();

app.use(sslRedirect());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/home", function(req, res) {
    res.render("home");
});

app.get("/portfolio", function(req, res) {
    res.render("portfolio");
});

app.get("/about", function(req, res) {
    res.render("about")
});

app.get("/contact", function(req, res) {
   res.render("contact"); 
});


app.get("*", function(req, res) {
    res.send("Sorry, page not found");
})


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started");
});
