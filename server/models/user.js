const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLiength: 1,
        trim: true
    }
});

module.exports = { User };