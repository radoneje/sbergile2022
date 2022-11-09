var express = require('express');
var router = express.Router();
let pug = require("pug")
let fsPromives=require("fs").promises;
const fs = require('fs');
let path=require("path");
let zip=require("zip-a-folder");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/export', async function(req, res, next) {
  let html=pug.renderFile(path.join( __dirname, "/../views/index.pug"), { title: 'Express' })

  await fsPromives.writeFile( path.join( __dirname, "/../html/index.html"), html)

  await zip.zip(path.join( __dirname, "../html/"), path.join(__dirname + '/../public/sbergile.zip'));


  res.download(path.join(__dirname + '/../public/sbergile.zip'))

});

module.exports = router;
