var {MongoClient} = require('mongodb');

console.log(MongoClient);

// connect to some database inside mongo server

MongoClient.connect('mongodb://localhost:27017/shreedb', (err, db) => {
        if(err) {
                return console.log('could not connect to mongo server');
        }

        console.log(db);
        console.log('connected to mongo server');

        var doc = {
                name : 'shree',
                age : 36
        };

        // insert a doc into db
        db.collection('shreeCol').insertOne(doc, (err, result) => {
                if(err) {
                        return console.log('could not insert document');
                }

                console.log('document inserted successfully')
                console.log(result.ops[0]._id.getTimestamp());
        });

        // close db
        db.close();
});
