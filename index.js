/*express dependency*/
const express = require('express');
const ejs = require('ejs');
const app = express();

// ROUTES (a url fragment) => a JavaScript function

app.set("view engine","ejs");

app.get ("/", function(req, res){
    res.send("<h1>Hello World</h1>")
});

app.get("/about-us", function(req,res){
    res.render("index", {
        "yourName":"Henry Leong",
        "luckyNumber": Math.random() * 100

    });
});

app.get('/hello/:firstName', function(req,res){
    res.send("Hello " + req.params.firstName);
})



// start server
app.listen(8080, function(){
    console.log("Express server has started")
});

