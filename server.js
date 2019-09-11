const express = require('express');
const path = require('path');





const app = express();
const PORT = 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join('./build')));

// Express Setup
app.get('*', function(req, res) {
	res.sendFile(path.resolve('./build/index.html'));
});

console.log(path.resolve("./build/index.html"))

app.listen(PORT, function (err) {
	if (err) return console.log(err);
	console.log(('Project If Then - EAHS (https://ifthen.vinniehat.tk) BACKEND, opened up at Port: ' + PORT));
});