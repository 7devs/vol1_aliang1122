var app=require('express')(),
    bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({
  extended:false
}));

//将处理的逻辑交给具体的包来执行
app.use('/news',require('./lib/routers/api'));


app.use('/*',function(req,res,next){
  res.status(404).send('Not Found');
});

app.listen(3000,function(){
  console.log('lesson 6 exercise.');
});
