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
    db.aggregate(
        [
          {
            $facet: {
              male1: [
                { $match: { gender: "남자", animal: "호랑이" } },
                { $count: "male1" },
              ],
              male2: [
                { $match: { gender: "남자", animal: "코끼리" } },
                { $count: "male2" },
              ],
              female1: [
                { $match: { gender: "여자", animal: "호랑이" } },
                { $count: "female1" },
              ],
              female2: [
                { $match: { gender: "여자", animal: "코끼리" } },
                { $count: "female2" },
              ],
            },
          },
          {
            $project: {
              Male1: { $arrayElemAt: ["$male1.male1", 0] },
              Male2: { $arrayElemAt: ["$male2.male2", 0] },
              Female1: { $arrayElemAt: ["$female1.female1", 0] },
              Female2: { $arrayElemAt: ["$female2.female2", 0] },
            },
          },
        ],
        (err, result) => {
          console.log(result[0]);
          res.send({ count: result[0] });
        }
      );
});

module.exports = router;