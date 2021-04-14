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
    // res.redirect('/complete-user-information');
})

router.route('/:username').put(async(req, res) => {
    let target = await User.findOne({username: req.params.username});
    await target.update(req.body);
    res.json(target);
})


module.exports = router;
