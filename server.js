var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, "static"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)
app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
app.listen(process.env.PORT || 1337, function () {
    console.log('Express server listening on port 1337');
});


