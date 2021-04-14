import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class CompleteUserInformation extends Component{

  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePron = this.onChangePron.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeIns = this.onChangeIns.bind(this);
    this.onChangeFb = this.onChangeFb.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fistName: '',
      lastName: '',
      age: '',
      gender: '',
      pron: '',
      phone: '',
      ins: '',
      fb: ''
    }
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangePron(e) {
    this.setState({
      pron: e.target.value
    })
  }
  onChangeFb(e) {
    this.setState({
      fb: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeIns(e) {
    this.setState({
      ins: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    var params = new URLSearchParams();
    params.append("firstName", this.state.firstName);
    params.append("lastName", this.state.lastName);
    params.append("Age", this.state.age);
    params.append("gender", this.state.gender);
    params.append("preferredPron", this.state.pron);
    params.append("instagram", this.state.ins);
    params.append("facebook", this.state.fb);
    params.append("phone", this.state.phone);
    
    axios.put(`http://linserv1.cims.nyu.edu:11123/users/${cookies.get('username')}`, params);
  }

  render(){
    return (
      <div class='mediumPanel'>
        <h2>Fill up some information so that your teachers and classmates can know you better!</h2>
        <p class='secondaryText'>* are recommended information</p>
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name<span id='required'>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name..."
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name<span id='required'>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name..."
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your age..."
                value={this.state.age}
                onChange={this.onChangeAge}
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
              value={this.state.gender}
              onChange={this.onChangeGender}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPreferredPron">
              <Form.Label>Preferred pronouns</Form.Label>
              <Form.Control as="select">
                <option>Please select...</option>
                <option>He/Him/His</option>
                <option>She/Her/Hers</option>
                <option>Other</option>
                value={this.state.pron}
                onChange={this.onChangePron}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number..."
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridIns">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your insagram ID..."
                value={this.state.ins}
                onChange={this.onChangeIns}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFacebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your facebook ID..."
                value={this.state.fb}
                onChange={this.onChangeFb}
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