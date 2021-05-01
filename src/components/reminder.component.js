import React, { Component } from 'react';

export default class Reminder extends Component{
    render(){
        return(
            <div class='hugePanel'>
                <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
                <h3>There are some things that you need to keep in mind...</h3>
                <ul>
                    <li>You need to login first to do other action such as view courses, enroll, view profile, etc. </li>
                </ul>
                <a href='/main-courses'>Click here to get back to main-courses page.</a>
            </div>
        )
    }
}