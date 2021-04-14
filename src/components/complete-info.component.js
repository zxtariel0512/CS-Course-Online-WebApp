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
        <h2>Fill up some information so that your teachers and classmates can know you better!</h2>
        <p class='secondaryText'>* are required information</p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name<span id='required'>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name<span id='required'>*</span></Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your age..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select">
                <option>Please select...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPreferredPron">
              <Form.Label>Preferred pronouns</Form.Label>
              <Form.Control as="select">
                <option>Please select...</option>
                <option>He/Him/His</option>
                <option>She/Her/Hers</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridIns">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your insagram ID..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFacebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your facebook ID..."
              />
            </Form.Group>
          </Form.Row>

          
          <div id='submitBtn'>
            <Button variant="primary" type="submit">
              Done!
            </Button>
          </div>
        </Form>
      </div>
      
    )
  }










}