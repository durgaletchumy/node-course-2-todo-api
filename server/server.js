var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose.js");
var {Todo} = require("./models/todo.js");
var {Users} = require("./models/users.js");

var app = express();

//to send to the api to be used in a json 
app.use(bodyParser.json());

//"/todos" is the object
app.post("/todos", (req, res) => {
	var todo = new Todo({
		text: req.body.text,
		completed: req.body.completed,
		completedAt: req.body.completedAt
	});

	todo.save().then((doc)=>{
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log("Started on port 3000");
});