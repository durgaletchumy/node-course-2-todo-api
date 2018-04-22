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

	// db.collection("Todos").find({
	// 	_id: new ObjectID('5adca45f54c5fa15bc5f99fc')
	// }).toArray().then((docs) => {
	// 	console.log("Todos");
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch todos", err);
	// });

	// db.collection("Todos").find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log("Unable to fetch todos", err);
	// });

	db.collection("Users").find({
		name: "Durga"
	}).toArray().then((docs) => {
		console.log("Users");
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log("Unable to fetch users", err);
	});

	// db.close();
});