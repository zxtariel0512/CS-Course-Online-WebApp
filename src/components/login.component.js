import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../context/auth-context'

export default class CompleteUserInformation extends Component{

  static contextType = AuthContext
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      error: ''
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

  onSubmit(e) {
    const auth = this.context
    e.preventDefault();
    const user = {
        username: this.state.username,
        password: this.state.password,
    }

    var params = new URLSearchParams();
    console.log(user.username + " " + user.password);
    params.append('username', user.username);
    params.append('password', user.password);
    console.log('clicksubmit');

     axios.post('http://linserv1.cims.nyu.edu:11123/users/login', params, {
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
     })
      .then(response => {

        
        if(response.data.confirmed === false){
          this.props.history.push('/complete-user-information');
          auth.login(response.data.username, response.data.token);
        } else{
          this.props.history.push('/main-courses');
          auth.login(response.data.username, response.data.token);
        }

      }).catch(e => {
        this.setState({error: e.response.data.message});
      })
    
    
  }

  render(){
    return (
      <div class='mediumPanel'>
        <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
        <p style={{textAlign:'center'}}>Login into your account first to start your CS journey!</p>
        <Form onSubmit={this.onSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridLoginUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder="Enter your username..."
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder="Enter your password..."
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                </Form.Group>
            </Form.Row>

          
          <div id='submitBtn'>
            <Button variant="primary" type="submit">
              Login!
            </Button>
          </div>
        </Form>
        <p style={{color:'red', textAlign:'center', marginTop:10}}>{this.state.error}</p>
        <p style={{textAlign:'center'}}>Do not have an account yet? <a href='/register'>Register one now!</a></p>
      </div>    
    )
  }










}
