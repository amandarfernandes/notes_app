var express=require('express'),
    app = express(),
    PORT = 3000;

var noteRoutes = require('./routes/notes');

app.get('/',function(req,res){
   // res.sendFile('index.html');
   res.send('index file here');
});

app.use('/api/notes',noteRoutes)
app.listen(PORT,function(){
    console.log("APP IS RUNNING ON PORT "+PORT);
})
