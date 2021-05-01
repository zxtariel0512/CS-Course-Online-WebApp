import React, { Component } from 'react';

export default class Introduction extends Component{
    render(){
        return(
            <div class='hugePanel'>
                <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
                <p>CSLOL is a course registration system. It provides various Computer Science courses. </p>
                <a href='/main-courses'>Click here to get back to main-courses page.</a>
            </div>
        )
    }
}