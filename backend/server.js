const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'add session secret here!',
    resave: false,
    saveUninitialized: true,
}));

const uri = 'mongodb://localhost/cs-online-courses';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// here comes the routes
const userRouter = require('./routes/user.js');
const courseRouter = require('./routes/course.js');

app.use('/users', userRouter);
app.use('/courses', courseRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});