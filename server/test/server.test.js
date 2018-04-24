const request = require("supertest");
const expect = require("expect");

const {app} = require("./../server");
const {Todo} = require("./../models/todo");


//This is to be run before it goes through the describe, which means it will
//remove all the data in table before proceed to the next test.

beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

//test script
describe("POST /todos", (req, res) => {
    it("should create a new todo", (done) => {
        var text = "Test todo test";

        request(app)
            .post("/todos")
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done()
                }).catch((e) => {
                    done(e)
                });
            });
    });

    it("should not create to do with invalid body data", (done) => {
    	request(app)
    		.post("/todos")
    		.send({})
    		.expect(400)
    		.end((err,res) => {
    			if(err){
    				return done(err);
    			}

    			Todo.find().then((todos) => {
    				expect(todos.length).toBe(0);
    				done()
    			}).catch((e) => {
    				done(e)
    			});
    		});
    });
});