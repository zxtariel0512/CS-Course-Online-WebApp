import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

export default class Profile extends Component{

    

    constructor(props){
        super(props);
        this.state = {
            user:{},
            init:0
        }
    }


    componentDidMount(){


            axios.get('http://linserv1.cims.nyu.edu:11123/users/loginUser', {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                if(response.data == undefined){
                    this.props.history.push('/error');
                } else{
                    this.setState({user: response.data, init:1})
                }
            })

       
    }
    
    render(){
        const enrolledCourses = this.state.user.courses;
        if(this.state.init){
            return (

                <div class='Profile'>
                
        
                <div class="page-content page-container" id="page-content">
                    <div class="padding">
                        <div class="row container d-flex justify-content-center">
                            <div class="col-xl-6 col-md-12">
                                <div class="card user-card-full">
                                    <div class="row m-l-0 m-r-0">
                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                            <div class="card-block text-center text-white">
                                                <div class="m-b-25"> 
                                                    <img src="https://icon-library.com/images/cute-computer-icon/cute-computer-icon-5.jpg" class="img-radius" width="70%" alt="User-Profile-Image" />
                                                </div>
                                                <h6 class="f-w-600" id='username'>{this.state.user.username}</h6>
                                                <p style={{color:'white',size:'large',fontWeight:'bold'}}>Welcome to CSLOL!</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="card-block">
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600" style={{fontSize:'x-large'}}>Information</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">First Name</p>
                                                        <h6 class="f-w-400">{this.state.user.firstName}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Last Name</p>
                                                        <h6 class="f-w-400">{this.state.user.lastName}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Age</p>
                                                        <h6 class="f-w-400">{this.state.user.Age}</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Gender</p>
                                                        <h6 class="f-w-400">{this.state.user.gender}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Preferred Prouns</p>
                                                        <h6 class="f-w-400">{this.state.user.preferredPron}</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Email</p>
                                                        <h6 class="f-w-400">{this.state.user.email}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Phone</p>
                                                        <h6 class="f-w-400">{this.state.user.phone}</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Instagram</p>
                                                        <h6 class="f-w-400">{this.state.user.instagram}</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">FaceBook</p>
                                                        <h6 class="f-w-400">{this.state.user.facebook}</h6>
                                                    </div>
                                                </div>
                                                
                                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Courses</h6>
                                                <ul>
                                                {enrolledCourses.map(ele => {
                                                    return(
                                                        <li class="f-w-400">{ele.name}, by {ele.instructor}, {ele.time}, {ele.mode}</li>
                                                    )
                                                })}
                                                </ul>
                                                <p style={{textAlign:'center', marginTop:30}}><a href='/main-courses'>Go and enroll more courses!</a></p>
                                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
                )
        } else{
            return(
                <div class='mediumPanel'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
            
        }
        
        
    }
}
