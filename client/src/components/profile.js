import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import logo from './Logo.png';
import BasicProfilePic from './basic-pf-pic.jpg';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'


class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          name:'',
          email:'',
          job:'',
          age:'',
          city:''
        };
      }
      

    render() {
        return (
          <>
          <div>
         <div>
  <Image class = 'proImg' style={{height:'250px',width:'300'}} src={BasicProfilePic} responsive />


  <ListGroup horizontal>
  <ListGroup.Item>Name</ListGroup.Item>
  <ListGroup.Item>location </ListGroup.Item>
  <ListGroup.Item>Rate</ListGroup.Item>
  <ListGroup.Item>client</ListGroup.Item>
</ListGroup>
</div>
</div>



  {/* <Button variant="outline-secondary">Name</Button>{' '}
  <Button variant="outline-secondary">Rate</Button>{' '}
  <Button variant="outline-secondary">clients</Button>{' '}
  <Button variant="outline-secondary">Location</Button>{' '} */}

  {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar> */}
          </>
    )
  }
}
export default Profile;


