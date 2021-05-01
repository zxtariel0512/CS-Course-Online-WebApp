import React, { Component } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../context/auth-context';

export default class Course extends Component{

    constructor(props){
        super(props);

        this.state = {
            course:{},
            initCourse:0
        }
    }

    
    async componentDidMount(){
        // try{
        //     await axios.get('http://localhost:3000/loginUser', {
        //         headers:{
        //             'Authorization': 'Bearer ' + localStorage.getItem('token')
        //         }
        //     })
        // } catch(e){
        //     this.props.history.push('/error');
        // }
        
        
        // this.setState({course: this.props.match.params.slug})
        const courseSlug = this.props.match.params.slug;
        await axios.get(`http://linserv1.cims.nyu.edu:11123/courses/${courseSlug}`, {
            headers:{
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
          })
            .then(response => {
                this.setState({course: response.data, initCourse: 1})
            })
    }



    render(){
        if(this.state.initCourse){
            const enroll = `/enroll/${this.state.course.slug}`;
            const review = `/main-courses/${this.state.course.slug}/reviews`;
            const topics = this.state.course.topics;
            const textbooks = this.state.course.textbooks;
            console.log(this.state.course);
            const allReviews = this.state.course.reviews;
            let sum = 0;
            for(let i = 0; i < allReviews.length; i++){
                sum += allReviews[i].ratings;
            }
            const avgRatings = sum / allReviews.length;
            // const enroll = '/enroll/basic-algorithms';
            // const review = '/review/basic-algorithms';
            // const textbooks = ["lala", "lala"];
            return(

                <div class='hugePanel'>

    <               Nav style={{fontSize:'medium'}}>
                        <Nav.Item as="li">
                            <Nav.Link href={enroll}>Enroll</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href={review}>Reviews</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href='/main-courses'>Back</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <h1 style={{marginTop:30}}>{this.state.course.name}</h1>
                    <Badge pill variant="primary" style={{marginBottom:30, fontSize:'medium'}}>
                        ⭐ {avgRatings}
                    </Badge>
                    <h4>{this.state.course.instructor}</h4>
                    <h4>{this.state.course.time}</h4>
                    <h4>{this.state.course.mode}</h4>
                    <h4>Location: {this.state.course.location}</h4>
                    <p style={{marginTop:30,fontSize:'medium'}}>{this.state.course.description}</p>
                    <h5 style={{marginTop:30, color:'dodgerblue'}}>Main Topics:</h5>
                    
                    <ul>
                    {topics.map(ele => {
                        return <li>{ele}</li>
                    })}
                    </ul>
                    <h5 style={{marginTop:30, color:'dodgerblue'}}>Required Textbooks:</h5>
                    <ul>
                    {textbooks.map(ele => {
                        return <li>{ele}</li>
                    })}
                    </ul>

                </div>

            )
        } else{
            return (
                <div class='largePanel'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }




    }


}