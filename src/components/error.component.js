import React, { Component } from 'react';

export default class Error extends Component{
    render(){
        return(
            <div class='mediumPanel'>
                <h2>Oops, somthing went wrong ⚠️</h2>
                <p><a href='/'>Login</a> first to start your CS journey!</p>
                <p>First time in CSLOL? <a href='/register'>Register</a> one!</p>
            </div>
        )
    }
}