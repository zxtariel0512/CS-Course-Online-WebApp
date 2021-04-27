import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// const cookies = new Cookies();


export default class Register extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: '',
          email: '',
          error: '',
        }
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        }
        //document.cookie =  `username=${user.username}`;
        var params = new URLSearchParams();
        console.log(user.username + " " + user.password);
        params.append('username', user.username);
        params.append('password', user.password);
        params.append('email', user.email);
       // axios.post('http://linserv1.cims.nyu.edu:11123/users/register', params)
         axios.post('http://localhost:3000/users/register', params)
            .then(response => {
              this.props.history.push('');
            }).catch(e => {
              this.setState({error: e.response.data.message});
            })
            // .then(window.location = '/complete-user-information')
          
            
        

        
        
      }

  render(){
    return (
      <div class='mediumPanel'>
        <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
        <p style={{textAlign:'center'}}>Register first to enroll and start your fantastic courses!</p>
        <p class='secondaryText'>* are required information</p>
        <Form onSubmit={this.onSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email<span id='required'>*</span></Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder="Enter your email address..."
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
                <Form.Text className="text-muted">
                    Please enter a valid email address that you use in your daily life. Later there will be a confirmation email sent to you, and you need to confirm that email in order to complete your registration.
                </Form.Text>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username<span id='required'>*</span></Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder="Enter your username..."
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                <Form.Text className="text-muted">
                    Your username must have length at least 8.
                </Form.Text>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password<span id='required'>*</span></Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder="Enter your password..."
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                <Form.Text className="text-muted">
                    Your password must have length at least 8. It must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.
                </Form.Text>
                </Form.Group>
            </Form.Row>

          
          <div id='submitBtn' >
            <Button variant="primary" type="submit">
              Register!
            </Button>
          </div>
        </Form>
        <p style={{color:'red', textAlign:'center', marginTop:10}}>{this.state.error}</p>
        <p style={{textAlign:'center'}}>Already have an account? <a href='/'>Then login now!</a></p>
      </div>
      
    )
  }










}