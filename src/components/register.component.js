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
        let usernameOk = 0;
        let passwordOk = 0;
        if(user.username.length <= 1){
          // return res.status(401).json({
          //   message: "Username too short. It must have at least 2 characters"
          // })
          this.setState({error: "Username too short. It must have at least 2 characters"});
        } else{
          usernameOk = 1;
        }
        if(user.password.length < 8){
          // return res.status(401).json({
          //   message: "Password too short. It must have at least 8 characters."
          // })
          this.setState({error: "Password too short. It must have at least 8 characters."})
        } else{
          let upper = 0;
          let lower = 0;
          let num = 0;
          for(let i = 0; i < user.password.length; i++){
            console.log(user.password);
            const c = user.password.charAt(i);
            if(c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57){
              num += 1;
            } else if(c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90){
              upper += 1;
            } else if(c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122){
              lower += 1;
            }
          }
          if(upper < 1 || lower < 1 || num < 1){
            // return res.status(401).json({
            //   message: "Password invalid. You need to have at least 1 upper case, at least 1 lower case, and at least 1 number."
            // })
            this.setState({error: "Password invalid. You need to have at least 1 upper case, at least 1 lower case, and at least 1 number."});
          } else{
            passwordOk = 1;
          }
        }
        if(usernameOk && passwordOk){
          //document.cookie =  `username=${user.username}`;
          var params = new URLSearchParams();
          console.log(user.username + " " + user.password);
          params.append('username', user.username);
          params.append('password', user.password);
          params.append('email', user.email);
        // axios.post('http://linserv1.cims.nyu.edu:11123/users/register', params)
          axios.post('http://linserv1.cims.nyu.edu:11123/users/register', params)
              .then(response => {
                this.props.history.push('/')
              }).catch(e => {
                this.setState({error: e.response.data.message});
              })
              // .then(window.location = '/complete-user-information')
        }
             
        
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
                    Please enter a valid email address that you use in your daily life. 
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
                    Your username must be longer than 1.
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