var express=require('express'),
    app = express(),
    PORT = 3000;

//body parser for access to req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//notes api routes    
var noteRoutes = require('./routes/notes');

//paths to static files - index.html, app.js and style.css
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
   res.sendFile('index.html');
   
});

app.use('/api/notes', noteRoutes);

app.listen(PORT,function(){
    console.log("APP IS RUNNING ON PORT "+PORT);
})
