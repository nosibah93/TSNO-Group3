import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Layout from "./Layout"
import BasicProfilePic from './basic-pf-pic.jpg';
import Image from 'react-bootstrap/Image'
const axios = require('axios');

 class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
          name:'',
          email:'',
          location:'',
          numOfPepole:'',
          rate:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClick(event) {
    event.preventDefault();
    alert('Thank you for hiring me');

  };

  handleSubmit(event) {
    event.preventDefault();

    alert('Thank you for your feedback');
  };

  profileDetails=(email)=>{
    console.log(email);
    axios.get("http://localhost:5000/profile"+email)
    .then(res=>{
        console.log(res);
        this.setState(
        );
        
    })
    .catch(err=>console.log(err))
}
componentDidMount(){
  this.profileDetails(this.state.email);
 }

  render() {
    return (
      <>
      <div>
        <Image class = 'proImg' style={{height:'250px',width:'300'}} src={BasicProfilePic} responsive />
            <ListGroup horizontal>
            <ListGroup.Item>Name</ListGroup.Item>
            <ListGroup.Item>location </ListGroup.Item>
            <ListGroup.Item>Rate</ListGroup.Item>
            <ListGroup.Item>client</ListGroup.Item>
            </ListGroup>
      </div>

      <div id="Profile">
        <Layout>
          <Button color="primary" size="sm" /*onClick={addService(service)}*/>Add Service</Button>{" "}
          <ListGroup>
            <ListGroup.Item>Service 1</ListGroup.Item>
            <ListGroup.Item>Service 2</ListGroup.Item>
          </ListGroup>{" "}
          <Button color="primary" size="sm">Hire Me!!</Button>{" "}
          <Button color="primary" size="sm">Done</Button>{" "}
        </Layout>
      </div>
      </>
    );
  }
}

export default Profile;