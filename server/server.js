var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean ,
        default: false
    } ,
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minLength: 1,
        trim: true
    }
})

var newUser = new User({
    email: 'g.sk@gmail.com    '
});

newUser.save().then((doc) => {
    console.log(`save User ${JSON.stringify(doc,undefined,2)}`)
    
}, (e) => {
    console.log(e)
});