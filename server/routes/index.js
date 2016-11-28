var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');

/* GET data from server. */
router.get('/', function(req, res, next) {
  var file = './data.json';
  jsonfile.readFile(file, function(err, obj) {
    if(err){
      return res.status(404).send(err);
    }
    return res.json(obj.data);
  });
});
// delete the data
router.delete('/:id', function(req, res, next) {
  var file = './data.json';
  var id = req.params.id;
  jsonfile.readFile(file, function(err, obj) {
    if(err){
      return res.status(404).send(err);
    }
    var list = obj.data.filter((el)=>{return el.id!=id});
    obj.data = list;
    jsonfile.writeFile(file, obj, function (err) {
      console.error(err)
    })
    return res.json(list);
  });
});

module.exports = router;
