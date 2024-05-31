const mongoose = require('mongoose');

const subTaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: {tybe: Boolean, default: false }
});

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true, enum: ['em pendência', 'em progresso', 'completa'] },
    subTasks: [subTaskSchema]
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;