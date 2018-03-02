var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');
var filePath;

router.get('/', function(req, res, next) {
	res.render('index.marko',{filePath: './pages/home.marko', headerData : {projectName: "Express Website"}});
});

router.get('/:filePath', function(req, res, next) {
	filePath = path.posix.join('pages',req.params.filePath);
	filePath = './'+filePath+'.marko';
	res.render('index.marko',{filePath: filePath, headerData : {projectName: "Express Website"}});
});

router.post('/contact',function(req,res,next){
	mailFunction(req);
	res.writeHead(302,{'Location':'/contact'});
	res.end();
});

module.exports = router;

function getMaildata(req) {
	var obj = {};
	obj.from = "adarsanand123@gmail.com";
	obj.to = req.body.email;
	obj.text = req.body.message;
	obj.subject = "website submission";
	obj.html = `<p>${req.body.message}</p>`;
	return obj;
}

function mailFunction(req){
	var data = getMaildata(req);
	var poolConfig = 'smtps://adarsanand123@gmail.com:Ammapapa102150@smtp.gmail.com/?pool=true';
	// var transporterObject = nodemailer.createTransport({
	// 	host: "smtp.gmail.com",
	// 	port: 587,
	// 	auth: {
	// 		user: "adarsanand123@gmail.com",
	// 		pass: "Ammapapa102150"
	// 	}
	// });
	var transporterObject = nodemailer.createTransport(poolConfig);
	transporterObject.sendMail(data);
}