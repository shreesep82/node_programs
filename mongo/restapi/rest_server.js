var {docStruct} = require('./mongoose_models')
var express = require('express')
var body_parser = require('body-parser');

var app = express();

app.use(body_parser.json());

app.use( (req, res, next) => {
        console.log('middleware : ', req.body);
        next();
});

app.listen(5004, () => {
	console.log('rest server listening on port 5004');
})

app.get('/rp_get_api1', (req, res) => {
	console.log(req.body);

  // get all docs from database
  docStruct.find().then((docs) => {
    console.log('docs: ', docs)
    res.send(docs)
  })

})

app.post('/rp_api1', (req, res) => {
	console.log(req.body);
	var data = new docStruct({name : req.body.name});

	data.save().then( (doc) => {
		console.log('doc is ', JSON.stringify(doc))
		res.send(doc)
	})
	.catch( (err) => {
		console.log('err: ', err);
		res.status(400).send(err);
	})

})

module.exports.app = app;
module.exports.docStruct = docStruct;
