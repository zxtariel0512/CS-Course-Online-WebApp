const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    content: String,
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

module.exports = mongoose.model('Review', reviewSchema);