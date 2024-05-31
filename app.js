const express = require('express');
const cors = require('cors');
const taskRoutes = requite('./routes/taskRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use('/tasks', taskRoutes);
app.use(express.static('views'));

module.exports = app;
