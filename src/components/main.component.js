import React, { Component } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


export default class Main extends Component{


    constructor(props){
        super(props);
        this.state = {
            courses:[],
            init:0,
            user:{},
            isLogin:false
        }
       
    }



    async componentDidMount(){

        await axios.get("http://linserv1.cims.nyu.edu:11123/courses/", {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            this.setState({courses: response.data, init: 1})
        })

        await axios.get("http://linserv1.cims.nyu.edu:11123/users/loginUser", {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            if(response.data == undefined){
                this.props.history.push('/error');
            }else{
                this.setState({user: response.data})
            }
            
        })

        
    }



    render(){
        console.log(`username: ${this.state.user.username}`);
        
        if(this.state.init){
            return(
                <div>
                    <Container className='main-nav'>
                        <Navbar bg="light" fixed="top">
                            <Navbar.Brand href="#home" style={{fontSize:'xxx-large'}}>CSLOL</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/main-courses" style={{fontSize:'xx-large'}}>Courses</Nav.Link>
                                {/* <Nav.Link href="#link" style={{fontSize:'xx-large'}}>Introduction</Nav.Link> */}
                                <NavDropdown title="Introduction" id="basic-nav-dropdown" style={{fontSize:'xx-large'}}>
                                    <NavDropdown.Item href="/introduction" style={{fontSize:'large'}}>What is CSLOL?</NavDropdown.Item>
                                    <NavDropdown.Item href="/actions" style={{fontSize:'large'}}>What can you do on CSLOL?</NavDropdown.Item>
                                    <NavDropdown.Item href="/reminder" style={{fontSize:'large'}}>Things you need to know</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                </Nav>
                                Welcome,<Nav.Link href='/profile' style={{fontSize:'x-large'}}>{this.state.user.username}</Nav.Link>

                            </Navbar.Collapse>
                        </Navbar>
                    </Container>

                    <div class='courses'>
                            <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
                            <h3 style={{textAlign:'center'}}>Have a look at our fantastic courses!</h3>
                            <CardDeck className='card-deck'>
                            {/* {console.log(this.state.courses)} */}
                            {this.state.courses.map(ele => {
                                const enrollLink = `/enroll/${ele.slug}`;
                                const info = `/main-courses/${ele.slug}`;
                                return (
                                    <div>
                                    <Card style={{ width: '22rem' }} id='course-card'>
                                        <Card.Body>
                                            <Card.Title>{ele.name}</Card.Title>
                                            <Card.Subtitle className="mb-2" style={{textAlign:'right'}}>{ele.time}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2" style={{textAlign:'right'}}>{ele.mode}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2" style={{textAlign:'right'}}>{ele.instructor}</Card.Subtitle>
                                            <Card.Text style={{fontSize:'medium'}}>
                                            {ele.summary}
                                            </Card.Text>
                                            <Card.Link href={enrollLink}>Quick Enroll</Card.Link>
                                            <Card.Link href={info}>More info</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                )
                            })}
                            </CardDeck>
                    </div>
                    
                    
                </div>
            )
        }
        else{
            return(
                <div>
                    <Container className='main-nav'>
                        <Navbar bg="light" sticky="top">
                            <Navbar.Brand href="/main-courses" style={{fontSize:'xxx-large'}}>CSLOL</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link href="/main-courses" style={{fontSize:'xx-large'}}>Courses</Nav.Link>
                                {/* <Nav.Link href="#link" style={{fontSize:'xx-large'}}>Introduction</Nav.Link> */}
                                <NavDropdown title="Introduction" id="basic-nav-dropdown" style={{fontSize:'xx-large'}}>
                                    <NavDropdown.Item href="#action/3.1" style={{fontSize:'large'}}>What is CSLOL?</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" style={{fontSize:'large'}}>What can you do on CSLOL?</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" style={{fontSize:'large'}}>Things you need to know</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                </Nav>
                                {/* <Form inline>
                                <FormControl type="text" placeholder="Search for courses..." className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                                </Form> */}
                                <Nav defaultActiveKey="/home" as="ul">
                                    <Nav.Item as="li" style={{fontSize:'x-large'}}>
                                        <Nav.Link href='/login'>Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" style={{fontSize:'x-large'}}>
                                        <Nav.Link href='/register'>Register</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                    
                    <div class='courses'>
                        <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
                    </div>
                    
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>

                    
                </div>
            )
        }
    }
}