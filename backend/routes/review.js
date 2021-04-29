const router = require('express').Router();
const User = require('../models/user.model.js');
const Course = require('../models/course.model.js');
const Review = require('../models/review.model.js');


router.route('/post').post(async(req, res) => {
    const newReview = req.body;  
    const review = await Review.create(newReview);
    const course = await Course.findOne({_id: review.course});
    course.reviews.push(review);
    await course.save();
    res.json(review);
})

router.route('/:id').delete(async(req, res) => {
    const review = await Review.findById(req.params.id);
    const course = await Course.findById(review.course);
    const idx = course.reviews.indexOf(req.params.id);
    course.reviews.splice(idx, 1);
    await course.save();
    await Review.findByIdAndDelete(req.params._id);
    res.json(review);
})

module.exports = router;