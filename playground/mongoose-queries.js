const {ObjectID} = require("mongodb");
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// var id = '6af304a90114411c158e5483';

// if(!ObjectID.isValid(id)) {
// 	console.log("'Id not valid");
// }


// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// //findOne returns one document at most (the first one)
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log("Todo by Id", todo);
// }).catch((e) => {
// 	console.log(e);
// });

//user.findById ,

var id = '5adf4035bd7cace403b7026a';

Users.findById(id).then((users) => {
	if(!users){
		return console.log('User not found');
	}
	console.log("User by Id", users);
}).catch((e) => console.log(e));