const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    instructor:{
        type: String,
        default: 'TBA'
    },
    time: {
        type: String,
        default: 'TBA'
    },
    mode:{
        type: String,
        default: 'TBA'
    },
    location: {
        type: String,
        default: 'TBA'
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        require: true
    }],
    students:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }],
    emailList:[{String}],
    expectation:[{String}],
    summary: String
});

module.exports = mongoose.model('Course', courseSchema);