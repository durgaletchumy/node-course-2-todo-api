// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log("Unable to connect to MongoDB server.");
	}

	//deleteMany
	// db.collection("Todos").deleteMany({text:"Eat Lunch"}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection("Users").deleteMany({name: "Durga"}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection("Todos").deleteOne({text:"Eat Lunch"}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndDelete({_id : new ObjectID("5adca7ad5c29701768b2df93")}).then((result) => {
		console.log(result);
	});
	console.log("Connected to MongoDB server");

	// db.close();
});