import React, { Component } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
        // this.onClick = this.onClick.bind(this);
    }

    // onClick(e){
    //     e.preventDefault();
    //     console.log(`after click username ${this.state.user.username}`);
    //     // this.props.history.push('/profile');
    // }

    async componentDidMount(){
        // const arr = [];
        // axios.get('http://localhost:3000/courses/')
        //     .then(response => {
        //         if(response.data.length > 0){
        //             this.setState({
        //                 courses: response.data
        //             })
        //         }
        //     })
        // const response = axios.get('http://localhost:3000/courses');
        // this.setState({courses: response.data});
        await axios.get("http://linserv1.cims.nyu.edu:11123/courses/", {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            this.setState({courses: response.data, init: 1})
        })
        // await axios.get("http://localhost:3000/users/loginUser").then(response => {
        //     this.setState({user: response.data})
        // })
        await axios.get("http://linserv1.cims.nyu.edu:11123/users/loginUser", {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            this.setState({user: response.data})
        })
        // await axios.get("http://localhost:3000/users/checkAuth").then(response => {
        //     this.setState({isLogin: response.data})
        // })
        // await axios.get('http://localhost:3000/users/loginUser').then(response =>{
        //     if(response != undefined){
        //         this.setState({isLogin: true, user: response.data})
        //     } 
        // })
        
    }

    

    

    // shouldComponentUpdate(){
    //     return (this.state.courses.length === 0);
    // }

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
                                <Nav.Link href="/" style={{fontSize:'xx-large'}}>Courses</Nav.Link>
                                {/* <Nav.Link href="#link" style={{fontSize:'xx-large'}}>Introduction</Nav.Link> */}
                                <NavDropdown title="Introduction" id="basic-nav-dropdown" style={{fontSize:'xx-large'}}>
                                    <NavDropdown.Item href="#action/3.1" style={{fontSize:'large'}}>What is CSLOL?</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" style={{fontSize:'large'}}>What can you do on CSLOL?</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" style={{fontSize:'large'}}>Things you need to know</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                </NavDropdown>
                                </Nav>
                                <Nav.Link href='/profile' style={{fontSize:'large'}}>{this.state.user.username}</Nav.Link>

                            </Navbar.Collapse>
                        </Navbar>
                    </Container>

                    <div class='courses'>
                            <h1 style={{textAlign:'center'}}>Welcome to CSLOL!</h1>
                            <h3 style={{textAlign:'center'}}>Have a look at our fantastic courses!</h3>
                            <CardDeck>
                            {/* {console.log(this.state.courses)} */}
                            {this.state.courses.map(ele => {
                                const enrollLink = `/enroll/${ele.slug}`;
                                return (
                                    <div>
                                    <Card style={{ width: '24rem' }} id='course-card'>
                                        <Card.Body>
                                            <Card.Title>{ele.name}</Card.Title>
                                            <Card.Subtitle className="mb-2" style={{textAlign:'right'}}>{ele.time}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2" style={{textAlign:'right'}}>{ele.mode}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2" style={{textAlign:'right'}}>{ele.instructor}</Card.Subtitle>
                                            <Card.Text style={{fontSize:'medium'}}>
                                            {ele.summary}
                                            </Card.Text>
                                            <Card.Link href={enrollLink}>Quick Enroll</Card.Link>
                                            <Card.Link href="#">More info</Card.Link>
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
                    
                </div>
            )
        }
    }
}