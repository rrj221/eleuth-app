
const mongoose = require('mongoose');


const { Schema } = mongoose;

const itemSchema = new Schema({
	text: String,
	isCompleted: {
		type: Boolean,
		default: false
	}
});

const TodoItem = mongoose.model('TodoItem', itemSchema);

module.exports = TodoItem;