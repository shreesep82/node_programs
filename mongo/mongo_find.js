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

        doc._id = 456;
        db.collection('shreeCol').insertOne(doc, (err, result) => {
                if(err) {
                        console.log('could not insert one');
                }
                console.log(JSON.stringify(result, undefined, 2));
        })

        // insert a doc into db
        db.collection('shreeCol').find().toArray().then( (docs) => {
                console.log(JSON.stringify(docs));
        })
        .catch( (err) => {
                console.log('could not find any docs');
        });

        var {find} = db.collection('shreeCol');

        db.collection('shreeCol').find({age: 36}).toArray().then( (docs) => {
                console.log(docs);
        })
        .catch( (err) => {
                console.log(err);
        })

        db.collection('shreeCol').findOne( {age: 36},  (err, result) => {
                if(err) {
                        console.log('could not find one');
                }
                console.log(JSON.stringify(result, undefined, 2));
        })

        db.collection('shreeCol').deleteOne( {age: 36},  (err, result) => {
                if(err) {
                        console.log('could not delete one');
                }
                console.log(JSON.stringify(result, undefined, 2));
        })

        db.collection('shreeCol').deleteMany( {age: 36},  (err, result) => {
                if(err) {
                        console.log('could not delete many');
                }
                console.log(JSON.stringify(result, undefined, 2));
        })

        // close db
        db.close();
});
