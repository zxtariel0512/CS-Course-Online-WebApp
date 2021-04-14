const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    gender: String,
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course'
    }],
    phone: String,
    instagram: String,
    facebook: String,
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    Age: String,
    preferredPron: String
});

module.exports = mongoose.model('User', userSchema);