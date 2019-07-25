import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import './Header.scss'
import { MDBNavbar, MDBNavbarBrand, MDBContainer, MDBIcon } from 'mdbreact'

const authenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link href="#create-prompt">Create A Prompt!</Nav.Link>
    <Nav.Link href="#your-prompts">Your Prompts!</Nav.Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Nav.Link href="#/sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <MDBNavbar className="mb-4 z-depth-1    justify-content-end" color="grey lighten-2">
    <MDBContainer>
      <MDBNavbarBrand>
        <MDBIcon icon="pencil-alt" />Always Be Drawing!
      </MDBNavbarBrand>
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </MDBContainer>
  </MDBNavbar>
)

export default Header
