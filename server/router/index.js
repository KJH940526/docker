const express = require('express');
const router = express.Router();
const db = require('../models/survey'); // 문제있음

router.get('/', function(req, res){
    res.send({title : 'Hello React x NodeJS'});
});

router.post('/input', function(req, res){
    console.log(req.body);
    db.create(req.body, function (err, result) {
        if (err){
            console.log(err);
        }else {
            console.log(result);
        }
        res.send({result : result.__v});
    })  
});

router.get('/result', function(req, res){
    let arr = []
    db.countDocuments({gender:"남자", animal:"호랑이"}, (err,result)=>{
        arr.push(result);
        db.countDocuments({gender:"남자", animal:"코끼리"}, (err,result)=>{
            arr.push(result);
            db.countDocuments({gender:"여자", animal:"호랑이"}, (err,result)=>{
                arr.push(result);
                db.countDocuments({gender:"여자", animal:"코끼리"}, (err,result)=>{
                    arr.push(result);
                    res.send({count:arr})
                })
            })        
        })
    })
});

module.exports = router;