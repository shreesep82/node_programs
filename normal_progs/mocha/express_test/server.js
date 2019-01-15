const express = require('express')

var app = express()

app.get('/', (req, res) => {
	console.log('got request for /');
	res.send('Hi man');
});

app.get('/ep1', (req, res) => {
	console.log('got request for /ep1');
	res.status (404).send({
		error : 'Page cannot be displayed'
	});
});

app.get('/ep2', (req, res) => {
	console.log('got request for /ep2');
	res.status(200).send({
		data : 'This is the data'
	});
});

app.listen(5004, () => {
	console.log('server started listening on 5004');
});

module.exports.app = app;
