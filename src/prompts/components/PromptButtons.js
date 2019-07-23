import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdbreact'

const PromptButton = (props) => {
  return (
    <React.Fragment>
      <MDBBtn gradient="peach"><Link to="/animals">ANIMALS</Link></MDBBtn>
      <MDBBtn gradient="peach"><Link to="/industrial">Industrial</Link></MDBBtn>
    </React.Fragment>
  )
}

export default PromptButton
