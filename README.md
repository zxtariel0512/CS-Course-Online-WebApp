# CSLOL

## Overview
CSLOL is a web application which serves for a **mocking** "non-school school" educational institution that specifically teaches computer science. Here, the "non-school school" means that on one hand, it provides high-quality computer science courses, either online or offline, and contains high-quality teaching resources that would take responsibility of designing couress and assignments, grading homework, making exams, etc. On the other hand, different from official schools, it has not requirement on students' previous educational background, and is open to people at all ages. It has less requirements than official schools, but provides as good education as official schools!

**And CSLOL serves as the course registration web application** for this mocking education institution. There is no educational background requirement users, and there is no entrance examinations. CSLOL contains very detailed information for all computer science courses provided by the institution, including course description, information of instructors, and reviews of each course made by other users. Users are able to browse all courses' information as a guest user, but are required to register an account using a valid email address before formally enroll in any course. 

After registration and filling out some basic personal information, users are able to enroll/swipe/drop any course they want. They are free to make their own study plan and course schedule, and are free to join in class whenever they want. They are also free to do reviews for any course they have taken or finished. Users are allowed to formally start their course, and would receive further instruction and pass to join the course after finishing the payment. All courses have same price. And users are asked to pay per course. 

**Note that all above -- the institution, course information, instructors' information, etc -- are all mocked.**

## Data Model
The application will store User, Course, and Review.

* User can have an array of Course (via reference, and would be populated by Course name).

* Course can have an array of Review (via reference, and would be populated by Review ratings).

* Review has a publisher (via reference to User, and would be populated by username), and a reviewed course (via reference, and would be populated by Course name).

An example of User:

```
{
    username: 'zxtariel',  
    firstname: 'Xintong',
    lastname: 'Zhu',
    gender: 'female',//optional
    password: //hash,
    email: 'zxt@gmail.com',
    confirmed: true,
    courses: ['Theory of Computation', 'Computer System Organizations', 'Applied Internet Technologies'],
    phone: '9283839999', //optional
    instagram: 'zxtlll', //optional
    facebook: 'zxtzzz' //optional
}
```

An example of Course:

```
{
    name: 'Applied Internet Technologies',
    description: 'Introduce javascript, authentication, html, etc, which are useful for creating web applications.',
    instructor: 'Joe Veroza',
    time: 'Tue, Thu. 9:30-10:45',
    mode: 'online',
    location: 'N/A',
    reviews: [5, 5, 4, 5, 5, 4]
}
```

An example of Review:

```
{
    publisher: 'ls3',
    content: 'Brilliant class! Very thorough introduction, and now I can make a web app on my own!.' //optional
    ratings: 5,
    course: 'Applied Internet Technologies'
}
```

### [Link to the draft of models](./backend/models)

## Wireframes

**Some are finished in photoshop, and some are finished in hand drawings.**

### / - main page, redirect to /courses

![](./documentation/course.png)

### /courses - display all courses and brief info

![](./documentation/course.png)

### /about - contains information about the educational institution

![](./documentation/about.png)

### /price-and-rule - contains information about the prices, tuition, and tutorial of this web application (course registration)

![](./documentation/price&rule.png)

### /login - log in page, prompt user for username and password

![](./documentation/login.png)

### /register - register page, prompt user for some basic personal information, and email address for later confirmation email

![](./documentation/register.png)

### /courses/slug - page for specific course that contains information of that course, reviews, and enroll option. slug would be the course's name.

![](./documentation/specificCourse.png)

### /courses/slug/reviews - contains all reviews (ratings and comments) of a specific course specified by the slug (the course's name)

![](./documentation/overallRating.png)

### /courses/slug/reviews/post - post a review to a specific course (required login status)

![](./documentation/review.png)

### /username/profile - personal profile of current user

![](./documentation/profile.png)

### /payment - payment page (may change depending on which API to use finally)

![](./documentation/payment.png)

## Site Map
**The following site map is generated in illustrator.**

![](./documentation/siteMap.pdf)

### [Link to the cite map](./documentation/siteMap.pdf)
