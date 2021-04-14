const router = require('express').Router();
const User = require('../models/user.model.js');
const Course = require('../models/course.model.js');

// here comes the routes
router.route('/register').post(async(req, res) => {
    let user = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    let newUser = await User.create(user);
    await newUser.save();
    res.json(newUser);
    // res.json(newUser);
    // User.create(user);
    // try {
    //   let newUser = await User.create(req.body);
    //   res.json(newUser);
    // } catch (error) {
    //   res.status(500).json({message: "error: create new user"})
    // }
    // new User({
    //     email: req.body.email,
    //      username: req.body.username,
    //      password: req.body.password
})


module.exports = router;
