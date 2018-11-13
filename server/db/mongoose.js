var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
});

module.exports = {
    mongoose
};