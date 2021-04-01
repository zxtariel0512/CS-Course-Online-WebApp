const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    content:{
        type: String,
        require: true
    },
    ratings: {
        type: Number,
        require: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        require: true
    }
});

module.exports = mongoose.Schema('Review', reviewSchema);