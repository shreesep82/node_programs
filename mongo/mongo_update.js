var {MongoClient} = require('mongodb');

console.log(MongoClient);

// connect to some database inside mongo server

MongoClient.connect('mongodb://localhost:27017/shreedb', (err, db) => {
        if(err) {
                return console.log('could not connect to mongo server');
        }

        //console.log(db);
        console.log('connected to mongo server');

        var doc = {
                _id : 123,
                name : 'shree',
                age : 36
        };

        db.collection('shreeCol').insertOne(doc, (err, result) => {
                if(err) {
                        console.log('could not insert one');
                }
                console.log(JSON.stringify(result, undefined, 2));
        })

        db.collection('shreeCol').findOneAndUpdate(
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

        // close db
        db.close();
});
