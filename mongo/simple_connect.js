var mongo_client = require('mongodb').MongoClient;

console.log(mongo_client);

// connect to some database inside mongo server

mongo_client.connect('mongodb://localhost:27017/shreedb', (err, db) => {
        if(err) {
                return console.log('could not connect to mongo server');
        }

        console.log(db);
        console.log('connected to mongo server');

        // close db
        db.close();
});
