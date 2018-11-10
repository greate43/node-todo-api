//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

   
    
    
    db.collection('User').insertOne({
        name: 'Salman',
        age: 25,
        location:'City'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert user ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });


    client.close();
});