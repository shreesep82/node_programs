var {docStruct} = require('./mongoose_models')
var express = require('express')
var body_parser = require('body-parser');

var app = express();

app.use(body_parser.json());

app.listen(5004, () => {
	console.log('rest server listening on port 5004');
})


app.post('/rp_api1', (req, res) => {
	console.log(req.body);
	var data = new docStruct({name : req.body.text});

	data.save().then( (doc) => {
		console.log('doc is ', JSON.stringify(doc))
		res.send(doc)
	})
	.catch( (err) => {
		console.log('err: ', err);
		res.status(400).send(err);
	})

})
