var app=require('express')(),
    bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
  extended:false
}));

app.use('/user',require('./lib/routers/user'));
app.use('/album',require('./lib/routers/album'));

app.listen(3000,function(){
  console.log("app is running...");
});
