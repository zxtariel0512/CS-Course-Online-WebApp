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
        <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
        <p style={{textAlign:'center'}}>Register first to enroll and start your fantastic courses!</p>
        <p class='secondaryText'>* are required information</p>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email<span id='required'>*</span></Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder="Enter your email address..."
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
                />
                <Form.Text className="text-muted">
                    Your password must have length at least 8. It must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.
                </Form.Text>
                </Form.Group>
            </Form.Row>

          
          <div id='submitBtn'>
            <Button variant="primary" type="submit">
              Register!
            </Button>
          </div>
        </Form>

        <p style={{textAlign:'center', marginTop:30}}>Already have an account? <a href='/login'>Then login now!</a></p>
      </div>
      
    )
  }










}