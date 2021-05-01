const router = require('express').Router();
const User = require('../models/user.model.js');
const Course = require('../models/course.model.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middlewares/check-auth");

// here comes the routes
router.route('/register').post((req, res) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
          email: req.body.email,
          username: req.body.username,
          password: hash
        });

        User.findOne({$or: [{email:req.body.email}, {username: req.body.username}]}).then(user1=>{
          if(user1){
            return res.status(401).json({
              message: "User Already Exist. Please use another email address or change a username."
            })
          }
  
          user.save().then(result => {
            if(!result){
              return res.status(500).json({
                message: "Error Creating USer."
              })
            }
            res.status(201).json({
              message: "User created!",
              result: result
            });
        })
          })   
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });;
      })
  
})

router.route('/updateProfile').put(checkAuth, async(req, res) => {
    console.log("update user profile...");
    const username = req.userData.username;
    req.body.confirmed = true;
    let updatedUser = await User.findOneAndUpdate({username: username}, req.body);
    res.json(updatedUser);
})


router.route('/loginUser').get(checkAuth, async(req, res) =>{


      const username = req.userData.username;
      let target = await User.findOne({username: username}).populate('courses');
      console.log("target:");
      console.log(target);
      res.json(target);

    
})

router.route("/login").post((req, res) => {
    let fetchedUser;
    // console.log(req.body.username);
    User.findOne({username:req.body.username})
        .then(user=>{
        if(!user){
            // console.log("Auth failed no such user");
            return res.status(401).json({
            message: "User not found. Please double check your username."
            })
        }
        fetchedUser=user;
        return bcrypt.compare(req.body.password, user.password);
        })
            .then(result=>{
                // console.log(fetchedUser)
                if(!result){
                    // console.log("Auth failed incorect password");
                    return res.status(401).json({
                    message: "Password incorrect. Please double check your username and password"
                    })
                }
                const token = jwt.sign(
                    { username: fetchedUser.username, userId: fetchedUser._id },
                    "secret_this_should_be_longer",
                    { expiresIn: "5h" }
                );
                // console.log(token);
                res.status(200).json({
                    token: token,
                    expiresIn: 3600,
                    username: fetchedUser.username,
                    confirmed: fetchedUser.confirmed
                });
            })
    .catch(e=>{
     
      console.log(e)
    
    })
  })



module.exports = router;
