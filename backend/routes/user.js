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
    await newUser.save((err, user)=>{
        if (err){
            console.log("DOCUMENT SAVE ERROR");
        }else{
            req.session.regenerate((err)=>{
                if(!err){
                    req.session.user=user;
                    res.json(newUser);
                    //res.redirect('/complete-user-information');
                }else{
                    console.log("SESSION CANNOT START");
                }
            })
        }
    });
})

router.route('/updateUserProfile').put(async(req, res) => {
    const username = req.session.user.username;
    console.log(username);
    let target = await User.findOne({username: username});
    await target.update(req.body);
    res.json(target);
})


module.exports = router;
