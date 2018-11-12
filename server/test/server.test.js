const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../model/todo');
const {ObjectID} = require('mongodb');

const todos = [{
  _id:new ObjectID(),
  text:'first to do'
},{
  _id:new ObjectID(),
  text:'second to do'
}];


beforeEach((done) => {
  Todo.deleteMany({}).then(async () => {

    await Todo.insertMany(todos);
    return done();
  
  });
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('Get /todos',()=>{
  it('should get all todos ',()=>{
     request(app)
     .get('/todos')
     .expect(200)
     .expect((res)=>{
        expect(res.body.todos.length).toBe(2);
        done();
     });
  });

});

describe('Get /todos/:id',()=>{
  it('should return todos doc ',(done)=>{
     request(app)
     .get(`/todos/${todos[0]._id.toHexString()}`)
     .expect(200)
     .expect((res)=>{
        expect(res.body.todo.text).toBe(todos[0].text);
     }).end(done);
  });

  it('should return 404 if todos not found ',(done)=>{
    var hexId = new ObjectID().toHexString();
    request(app)
    .get(`/todos/${hexId}`)
    .expect(404)
    .end(done);  
  });

  it('should return 404 if todos id is invalid ',(done)=>{
    var hexId = 1235
    request(app)
    .get(`/todos/${hexId}`)
    .expect(404)
    .end(done);  
  });
});

