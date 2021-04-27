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

router.route('/:slug').get(async(req, res) => {
    const course = await Course.findOne({slug: req.params.slug});
    res.json(course);
})

router.route('/enroll/:slug').put(async(req, res) => {
    const course = await Course.findOne({slug: req.params.slug});
    course.students.push(req.body.user);
    course.emailList.push(req.body.contactEmail);
    course.expectation.push(req.body.expectation);
    await course.save();
    console.log(course);
    res.json(course);
})

router.route('/update/:_id').put(async(req, res) => {
    const course = await Course.findOneAndUpdate({_id: req.params._id}, req.body);
    res.json(course);

})


module.exports = router;