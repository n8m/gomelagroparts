var express = require('express');
var path = require('path');
var sendgrid  = require('sendgrid')(
  'randomname',
  'randompassword'
);

var app = express();
app.use(express.static(path.join(__dirname, "static"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)
app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.urlencoded()); // to support URL-encoded bodies

app.post('/mail', function(request, response){

	sendgrid.send({
	  to: 'blackvilt@gmail.com',
	  from: 'app22711431@heroku.com',
	  subject: 'Письмо с сайта',
	  text: 'Автор: ' + request.body.name + '\n' + 'E-mail: ' + request.body.mail + '\n' + 'Сообщение: ' + request.body.msg 
	}, function(err, json) {
	if (err) { return console.error(err); }
	  response.send(json);
	});

});

app.listen(process.env.PORT || 1337, function () {
    console.log('Express server listening on port' + process.env.PORT);
});




