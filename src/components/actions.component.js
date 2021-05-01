import React, { Component } from 'react';

export default class Actions extends Component{
    render(){
        return(
            <div class='hugePanel'>
                <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
                <h3>There are many things you can do here!</h3>
                <h5>As a guest user...</h5>
                <ul>
                    <li>You can register an account in one sec! The only thing you need to let us know is a valid email address, an username, and your first name and last name. We do not require that much information.</li>
                    <li>Login simply with your username and password!</li>
                </ul>
                <h5>As a registered and login user...</h5>
                <ul>
                    <li>You can <a href='/main-courses'>check all courses </a> we provided! </li>
                    <li>You can enroll every course you find interest!</li>
                    <li>You can have a look at each course's detailed information, including topics, descriptions, textbooks, and basic information!</li>
                    <li>You can see all reviews of each course, which would help you consider whether a course is suitable for you!</li>
                    <li>You can make comments and leave ratings for every course you have once taken!</li>
                    <li>You can have a <a href='/profile'>look at your profile and to check your enrolled courses!</a></li>
                </ul>
                <a href='/main-courses'>Click here to get back to main-courses page.</a>
            </div>
        )
    }
}