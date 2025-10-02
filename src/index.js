const express = require("express");

const app = express();

app.listen(3000);

app.use(express.static("public"));

app.get("/",function(req,res){
    res.send("oie");

});

app.get("/soma",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const r = parseInt(a) + parseInt(b);
    res.send({r});

});

app.get("/subtrair",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const r = parseInt(a) - parseInt(b);
    res.send({r});

});

app.get("/dividir",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const r = parseInt(a) / parseInt(b);
    res.send({r});

});

app.get("/multiplicacao",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    const r = parseInt(a) * (b);
    res.send({r});

});

