import React, { Component,  useState, setShow} from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router';

function PostReview() {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState({});
    const [course, setCourse] = useState({});
    const [content, setContent] = useState('');
    const [ratings, setRatings] = useState(0);
    const [initUser, setInitUser] = useState(0);
    const [initCourse, setInitCourse] = useState(0);
    const courseSlug = useParams().slug;
    const reviewsPage = `/main-courses/${courseSlug}/reviews`;
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    if(initUser == 0 || initCourse == 0){
        axios.get('http://linserv1.cims.nyu.edu:11123/users/loginUser', {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
        })
            .then(response => {
                setUser(response.data);
                setInitUser(1);
            })

        
        
        axios.get(`http://linserv1.cims.nyu.edu:11123/courses/${courseSlug}`)
            .then(response => {
                setCourse(response.data);
                setInitCourse(1);
            })
    }

    const onChangeRatings = (e) => {

        setRatings(parseInt(e.target.value));
    }
    const onChangeContent = (e) => {

        setContent(e.target.value);
    }

    const handlePost = (e) => {
        e.preventDefault();
        var params = new URLSearchParams();
        params.append('publisher', user._id);
        params.append('content', content);
        params.append('ratings', ratings);
        params.append('course', course._id);
        axios.post('http://linserv1.cims.nyu.edu:11123/reviews/post', params, {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(()=>{
            window.location = reviewsPage;
        })
    }

    if(initUser && initCourse){
        const enroll = `/enroll/${course.slug}`;
        const coursePage = `/main-courses/${course.slug}`;
    return(
        <div>
            <Nav style={{fontSize:'medium'}}>
                <Nav.Item as="li">
                    <Nav.Link href={enroll}>Enroll</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    {/* <Nav.Link href={post}>Post</Nav.Link> */}
                    <Nav.Link onClick={handleShow}>Post</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href={coursePage}>Course</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href='/main-courses'>Back</Nav.Link>
                </Nav.Item>
            </Nav>

            <Modal show={show} onHide={handleClose} animation={false} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Post Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>What do you think of this course? Feel free to eave your rating and comments here!</p>

                    <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>How much do you rate this course?</Form.Label>
                        <Form.Control as="select" onChange={onChangeRatings}>
                            <option>Rating from 1 to 5</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            required
                        </Form.Control>
                    </Form.Group>
                        <Form.Group>
                        <Form.Label>Do you have any comments?</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder="Leave your comments here..."
                                    as="textarea" rows={3}
                                    onChange={onChangeContent}
                                />
                        </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handlePost}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    } else{
        return(
            <div class='largePanel'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
        )
    }
  }

  
//   render(<Example />);

export default class Reviews extends Component{
    constructor(props){
        super(props);

        this.state = {
            course:{},
            initCourse:0,
            user:{},
            initUser:0,
            rating:0,
            content:''
        }
    }

    async componentDidMount(){
        // this.setState({course: this.props.match.params.slug})
        const courseSlug = this.props.match.params.slug;
        await axios.get(`http://linserv1.cims.nyu.edu:11123/courses/${courseSlug}`)
            .then(response => {
                this.setState({course: response.data, initCourse: 1})
            })
            await axios.get('http://linserv1.cims.nyu.edu:11123/users/loginUser', {
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
        })
            .then(response => {
                if(response.data == undefined){this.props.history.push('/error');}
                else{this.setState({user: response.data, initUser: 1})}
            })
    }




    render(){
        // <Example />
        
        if(this.state.initUser && this.state.initCourse){
            const enroll = `/enroll/${this.state.course.slug}`;
            const allReviews = this.state.course.reviews;
            let sum = 0;
            for(let i = 0; i < allReviews.length; i++){
                sum += allReviews[i].ratings;
            }
            const avgRatings = sum / allReviews.length;
            
            return(
                <div class='hugePanel'>
                    
                    <PostReview />
                    <h1 style={{marginTop:30}}>{this.state.course.name}</h1>
                    <Badge pill variant="primary" style={{marginBottom:30, fontSize:'medium'}}>
                        ⭐ {avgRatings}
                    </Badge>
                    {allReviews.map(ele => {
                        return (
                            <div class='review-box'>
                                <h5 style={{display:'inline-block'}}>{ele.publisher.username}</h5>
                                <Badge pill variant="primary" style={{marginLeft:15}}>
                                    ⭐ {ele.ratings}
                                </Badge>
                                <p style={{fontSize:'medium'}}>{ele.content}</p>
                            </div>
                        )
                    })}
                    
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