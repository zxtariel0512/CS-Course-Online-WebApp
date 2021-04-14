import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default class CompleteUserInformation extends Component{

  render(){
    return (
      <div class='mediumPanel'>
        <h1 style={{textAlign:'center'}}>Login</h1>
        <p style={{textAlign:'center'}}>Login into your account and start your CS journey!</p>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridLoginUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder="Enter your username..."
                />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridLoginPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder="Enter your password..."
                />
                </Form.Group>
            </Form.Row>

          
          <div id='submitBtn'>
            <Button variant="primary" type="submit">
              Login!
            </Button>
          </div>
        </Form>

        <p style={{textAlign:'center', marginTop:30}}>Do not have an account yet? <a href='/register'>Register one now!</a></p>
      </div>
      
    )
  }










}