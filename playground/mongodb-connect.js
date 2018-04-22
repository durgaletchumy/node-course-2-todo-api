// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

//We can use this to set object id anywhere in the document
// var obj = new ObjectID();
// console.log(obj);

//Object destructuring
// var user = {name: "andrew", age:25}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log("Unable to connect to MongoDB server.");
	}

	console.log("Connected to MongoDB server");

	// db.collection("Todos").insertOne({
	// 	text: "Something to do",
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log("Unable to insert todo", err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//Insert new doc into Users (name, age, location)
	// db.collection("Users").insertOne({
	// 	name: "Durga",
	// 	age: 25,
	// 	location: "Kuala Lumpur"
	// }, (err,result) => {
	// 	if(err){
	// 		return console.log("Unable to connect to insert todo", err);
	// 	} 
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});