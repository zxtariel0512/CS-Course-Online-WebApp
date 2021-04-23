const router = require('express').Router();
const User = require('../models/user.model.js');
const Course = require('../models/course.model.js');
const Review = require('../models/review.model.js');

// here comes the routes

router.route('/').get(async(req, res) => {
    const courses = await Course.find({});
    res.json(courses);
})

router.route('/add').post(async(req, res) => {
    const newCourse = req.body;
    const course = await Course.create(newCourse);
    res.json(course);
})


module.exports = router;