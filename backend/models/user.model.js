const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
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
        type: boolean,
        default: false
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course'
    }],
    phone: String,
    instagram: String,
    facebook: String
});

module.exports = mongoose.model('User', userSchema);