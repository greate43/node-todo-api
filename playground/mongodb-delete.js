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
     
    db.collection('Todos').deleteMany({text:'something'}).then( (result) => {
        if (err) {
            return console.log('unable to insert user ', err);
        }

        console.log(JSON.stringify(result, undefined, 2));
    });


    client.close();
});