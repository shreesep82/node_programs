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

const {ObjectId} = require('mongodb');

app.get('/rp_get_ap1/:id', (req, res) => {
        console.log('get by id');

        var id = req.params.id

        // validate id
        if(ObjectId.isValid(id)) {
                // get object from mongo
                docStruct.findById(id).then( (doc) => {
                        if(doc == null) {
                                console.log('id not found');
                                res.status(404).send({err: 'Id not found'});
                                return;
                        }

                        res.status(200).send(doc);
                })
                .catch( (err) => {
                        console.log('mongo find failed');
                        res.status(400).send({err: 'mongo find failed'});
                });
        }
        else {
                console.log('invalid id');
                res.status(400).send({err: 'Invalid id'});
        }
});

app.get('/rp_delete_ap1/:id', (req, res) => {
        console.log('get by id');

        var id = req.params.id

        // validate id
        if(ObjectId.isValid(id)) {
                // get object from mongo
                docStruct.findByIdAndDelete(id).then( (doc) => {
                        if(doc == null) {
                                console.log('id not found');
                                res.status(404).send({err: 'Id not found'});
                                return;
                        }

                        res.status(200).send(doc);
                })
                .catch( (err) => {
                        console.log('mongo find failed');
                        res.status(400).send({err: 'mongo find failed'});
                });
        }
        else {
                console.log('invalid id');
                res.status(400).send({err: 'Invalid id'});
        }
});

/*
               {
                        _id : 123
                },
                {
                        $set : {
                                name : 'shreekanth'
                        },
                        $inc : {
                                age : 2
                        }
                },
                {
                        returnOriginal : false
                },
        ).then( (result) => {
                console.log(result);
        })
        .catch( (err) => {
                console.log(err);
        });

*/

const lodash = require('lodash');

app.patch('/rp_update_ap1/:id', (req, res) => {

        console.log('get by id');

        //var body = lodash.pick(req.body, ['name', 'completed']);
        //body.name = "kan"
        //body.timestamp = new Date();
        //console.log('body: ', body);
        //res.send();
        //return;

        var id = req.params.id

        // validate id
        if(ObjectId.isValid(id)) {
                // get object from mongo
                docStruct.findByIdAndUpdate(
                        id,
                        {
                                $set : {
                                        name : "kanth",
                                        timestamp : new Date()
                                },
                                $inc : {
                                        age : 0
                                }
                        },
                        {
                                new : true,
                                strict : false
                        }

                )
                .then( (doc) => {
                        if(doc == null) {
                                console.log('id not found');
                                res.status(404).send({err: 'Id not found'});
                                return;
                        }

                        //doc.set('f1', 'v1');
                        res.status(200).send(doc);
                })
                .catch( (err) => {
                        console.log('mongo find failed');
                        res.status(400).send({err: 'mongo find failed'});
                });
        }
        else {
                console.log('invalid id');
                res.status(400).send({err: 'Invalid id'});
        }
});

module.exports.app = app;
module.exports.docStruct = docStruct;
