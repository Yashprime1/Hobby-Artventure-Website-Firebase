var express = require('express');
var bodyParser = require('body-parser')
const av1= require('./models/artventure-artists');
const av2= require('./models/artventure-hirers');

var urlencodedParser = (bodyParser.urlencoded({ extended: false }))

var app = express();
app.listen(process.env.PORT)
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))


var mongoose = require('mongoose');
mongoose.connect(process.env.mongo_url, { useNewUrlParser: true ,useUnifiedTopology: true } );


app.get('/', function (req, res) {
    res.render('index')
})


app.get('/employee', function (req, res) {
    res.render('employee')
})

app.get('/employer', function (req, res) {
    res.render('employer')
})

app.post('/employee',urlencodedParser, function (req, res){
    t=""
    if(req.body['artist-of']==1){
        t="Singer"
    }
    if(req.body['artist-of']==2){
        t="Dancer" 
    }
    if(req.body['artist-of']==3){
        t="Musician" 
    }
    
    var artist = av1({name:req.body['name'],email:req.body['email'],telephone:req.body['telephone'],field:t,rate:req.body['skill-confidence']}).save(function (err) {
        if (err) throw err;
        console.log(1)
        console.log('item saved artist');
    })
    l=av2.find().where("field", t).exec(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.render('employee_result',{l:result})
    });        
})

app.post('/employer',urlencodedParser, function (req, res){
    t=""
    if(req.body['artist-of']==1){
        t="Singer"
    }
    if(req.body['artist-of']==2){
        t="Dancer" 
    }
    if(req.body['artist-of']==3){
        t="Musician" 
    }
    
    var hirer = av2({name:req.body['name'],email:req.body['email'],telephone:req.body['telephone'],field:t}).save(function (err) {
        if (err) throw err;
        console.log(2)
        console.log('item saved hirer');
    })
    l=av1.find().where("field", t).exec(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.render('employer_result',{l:result})
    });       
})


