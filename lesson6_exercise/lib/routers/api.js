var router=require('express').Router(),
    newsModel=require('../models/news.js');

router.route('/')
    .get(function(req,res,next){
      res.status(200).send(newsModel);
    });

router.route('/:id')
    .get(function(req,res,next){
      var id=req.params.id;
      if(id<1||id>newsModel.length){
        res.status(404).send('Not Exist')
      }else{
        res.status(200).send(newsModel[id-1]);
      }

    });

router.route('/:id')
    .delete(function(req,res,next){
      var id=req.params.id;
      if(newsModel[id-1]){
        newsModel.splice(id-1,1);
        console.log('delete successfully');
        console.log('删除后的数据为：',newsModel);
        res.status(200).end();
      }else{
        res.status(403).send('error, data not found');
      }
    });

module.exports=router;
