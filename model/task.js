const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description:String,
})

const Task = mongoose.model('tasks', TaskSchema);
exports.Task = Task;