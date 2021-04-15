const router = require('express').Router();
const User = require('../models/user.model.js');
const Course = require('../models/course.model.js');

// here comes the routes
router.route('/register').post((req, res) => {
    const newUser = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    // let newUser = await User.create(user);
    new User(newUser).save((err, user)=>{
        console.log('saving');
        if (err){
            console.log("DOCUMENT SAVE ERROR");
        }else{
            req.session.regenerate((err)=>{
                if(!err){
                    req.session.user=user;
                    req.session.save(function(err){
                        if (!err) {
                            console.log(req.session);
                            res.json(user)
                        }
                    });              
                }else{
                    console.log("SESSION CANNOT START");
                }
            })
        }
    });
})

router.route('/updateUserProfile').put(async(req, res) => {
    console.log("update user profile...");
    while(req.session.user === undefined){
        console.log("waiting for sessin user to exist -- update user profile");
    }
    const username = req.session.user.username;
    console.log(username);
    let updatedUser = await User.findOneAndUpdate({username: username}, req.body);
    res.json(updatedUser);
})

router.route('/profile/:username').put(async(req, res) =>{
    let updatedUser = await User.findOneAndUpdate({netid: req.params.username}, req.body);
    res.json(updatedUser);
})

router.route('/loginUser').get(async(req, res) =>{
    while(req.session.user === undefined){
        console.log("waiting for sessin user to exist -- login User");
        break;
    }
    const username = req.session.user.username;
    let target = await User.findOne({username: username});
    res.json(target);
})


module.exports = router;
