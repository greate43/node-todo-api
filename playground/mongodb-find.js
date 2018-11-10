//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var onj=new ObjectID();

MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true
}, (err, client) => {

    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
     var db = client.db('TodoApp');
    // db.collection('Todos').find({_id:new ObjectID('5be6b8069a2372a2cc6c5128')}).toArray().then((doc)=>{
    //     console.log(JSON.stringify(doc, undefined, 2));

    // },(err)=>{
    //     return console.log('unable to fetch to-do ', err);

    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Total count is ${count}`);

    // },(err)=>{
    //     return console.log('unable to fetch to-do ', err);

    // });

    db.collection('User').find({name:'Salman'}).toArray().then((doc)=>{
        console.log(JSON.stringify(doc, undefined, 2));

    },(err)=>{
        return console.log('unable to fetch to-do ', err);

    });
    
    client.close();
});