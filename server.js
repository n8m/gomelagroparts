var express = require('express');
var path = require('path');
var nodemailer = require("nodemailer");

var app = express();
app.use(express.static(path.join(__dirname, "static"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)
app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.urlencoded()); // to support URL-encoded bodies

app.post('/mail', function(request, response){

	response.send(request.body.name);
	mailmsg
	// create reusable transport method (opens pool of SMTP connections)
	var smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: "blackvilt@gmail.com",
	        pass: "0291511391"
	    }
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "Fred Foo ✔ <foo@blurdybloop.com>", // sender address
	    to: "blackvilt@gmail.com", // list of receivers
	    subject: "Письмо с сайт", // Subject line
	    text: request.body.name + '\n' + request.body.mail + '\n' + request.body.msg, // plaintext body
	    html: "<b>Hello world ✔</b>" // html body
	}

	// send mail with defined transport object
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }

	    // if you don't want to use this transport object anymore, uncomment following line
	    //smtpTransport.close(); // shut down the connection pool, no more messages
	});

});


app.listen(process.env.PORT || 1337, function () {
    console.log('Express server listening on port' + process.env.PORT);
});




