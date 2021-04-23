import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../context/auth-context'

export default class Enroll extends Component{

    constructor(props){
        super(props);

        this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        this.onChangeExpectation = this.onChangeExpectation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contactEmail: '',
            expectation: '',
            user: {},
            course:{},
            initUser: 0,
            initCourse: 0,
            finish: 0
        }
    }

    onChangeContactEmail(e) {
        this.setState({
          contactEmail: e.target.value
        })
    }
    onChangeExpectation(e) {
        this.setState({
          expectation: e.target.value
        })
    }
    async componentDidMount(){
        await axios.get('http://linserv1.cims.nyu.edu:11123/users/loginUser', {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
        })
            .then(response => {
                this.setState({user: response.data, initUser: 1})
            })
        // this.setState({course: this.props.match.params.slug})
        const courseSlug = this.props.match.params.slug;
        await axios.get(`http://linserv1.cims.nyu.edu:11123/courses/${courseSlug}`)
            .then(response => {
                this.setState({course: response.data, initCourse: 1})
            })
    }
    onSubmit(e){
        console.log(this.state.user);
        console.log(this.state.course.slug);
        e.preventDefault();
        var params = new URLSearchParams();
        params.append('contactEmail', this.state.contactEmail);
        params.append('expectation', this.state.expectation);
        params.append('user', this.state.user._id);
        axios.put(`http://linserv1.cims.nyu.edu:11123/courses/enroll/${this.state.course.slug}`, params, {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(
            this.setState({finish: 1})
        )
    }



    render(){
        if(this.state.initUser && this.state.initCourse){
            if(!this.state.finish){
                return(
                    <div class='largePanel'>
                        <h1 style={{textAlign:'center'}}>Enroll in One Sec!</h1>
                        <p>Please be honest in following information. All information are <span style={{color:'red'}}>required</span> in order to provide you with a fantastics learning experiences.</p>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridContactEmail">
                                <Form.Label>Please leave a email address that you commonly use for future contact with instructors.</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder="Enter your commonly used email..."
                                    value={this.state.contactEmail}
                                    onChange={this.onChangeContactEmail}
                                />
                                <Form.Text className="text-muted">
                                    This email is simply used for future contact with your instructor. It does not necessarily need to be the email address that you used for registration. 
                                </Form.Text>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridExpectation">
                                <Form.Label>Please briefly write something about your goals, intentions, or expectation to this class.</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder="Leave your message to your instructor here..."
                                    as="textarea" rows={5}
                                    value={this.state.expectation}
                                    onChange={this.onChangeExpectation}
                                />
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    Instructors are eager to know more about you! Feel free to leave messages to your instructor before formally starting the class. What do you want to learn? Why are you enrolling for this class? Is there any concern or suggestion? Which part in this class attracts you most? Are there any specific requests you want to raise for instructors?
                                </Form.Text>
                            </Form.Row>

                        
                        <div id='submitBtn-large'>
                            <Button variant="primary" type="submit">
                            Enroll now!
                            </Button>
                        </div>
                        </Form>

                        <p style={{textAlign:'center', marginTop:30}}>Regret a bit? <a href='/main-courses'>Go back and see other courses!</a></p>
                    </div>
                )
            } else{
                return(
                    <div class='largePanel'>
                        <h2>Please double check following information...</h2>
                        <p><span style={{fontSize:'large',fontWeight:'bold'}}>Course: </span>{this.state.course.name}</p>
                        <p><span style={{fontSize:'large',fontWeight:'bold'}}>Contact Email: </span>{this.state.contactEmail}</p>
                        <p><span style={{fontSize:'large',fontWeight:'bold'}}>Message to instructor: </span>{this.state.expectation}</p>
                        <p style={{textAlign:'center', marginTop:30}}>Everything's correct? <a href='/main-courses'>Back to main page!</a></p>
                        <p style={{textAlign:'center', marginTop:30}}>Something went wrong? <a href='/main-courses'>Go back and try again!</a></p>
                    </div>
                )
            }
        } else{
            return(
                <div class='largePanel'>
                    <p>loading...</p>
                </div>
            )
        }
    }


}