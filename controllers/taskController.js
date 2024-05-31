const Task = require('..models/taskModel');

const getAll = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor'})
    }
};

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        } 
    } catch (error) {
            res.status(500).json({ message: 'Erro interno do servidor'});
    }
};

const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor'})
    }
};

const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor'});
    }
};

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (deletedTask) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno do servidor'})
    }
};

module.exports = {
    getAll,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};