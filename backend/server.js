const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
     secret: 'secret',
     httpOnly:true,
     resave: true,
     saveUninitialized: true,
     secure:false
}));

app.use(cors());

app.use(express.static('./build'));
app.use('/register', express.static('./build'));
app.use('/complete-user-information', express.static('./build'));
app.use('/main-courses', express.static('./build'));
app.use('/profile', express.static('./build'));
app.use('/enroll/:slug', express.static('./build'));
app.use('/main-courses/:slug', express.static('./build'));
app.use('/main-courses/:slug/reviews', express.static('./build'));
app.use('/error', express.static('./build'));
app.use('/introduction', express.static('./build'));
app.use('/actions', express.static('./build'));
app.use('/reminder', express.static('./build'));

app.use((req, res, next) =>{
    res.locals.user = req.session.user;
    next();
});

// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);
 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
//  dbconf = 'mongodb://xz1991:uPuxnAMD@class-mongodb.cims.nyu.edu/xz1991';
    dbconf = 'mongodb://localhost/xz1991';
}
mongoose.connect(dbconf, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// here comes the routes
const userRouter = require('./routes/user.js');
const courseRouter = require('./routes/course.js');
const reviewRouter = require('./routes/review.js');

app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/reviews', reviewRouter);

app.listen(process.env.PORT || 3000, () => {
    if(process.env.PORT){
        console.log(`Server is running ${process.env.PORT}`);
    } else{
        console.log('Server is running 3000');
    }
});