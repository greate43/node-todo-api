//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var onj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true
}, (err, client) => {

    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    var db = client.db('TodoApp');


    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5be6c169001f423da84363e2')
    }, {
        $set: {
            name: 'yuiyuiy'
        }
    }, {
        returnOriginal  :false
    }).then((result)=>{
       console.log(result);
    }).catch((err)=>{
        console.log(`Their was some error ${err}`);

    });

    client.close();
});