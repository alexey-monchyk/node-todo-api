const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://aliosha7891:userab9ad1@ds125683.mlab.com:25683/todo' || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };