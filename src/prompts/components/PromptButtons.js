import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBCardBody, MDBRow, MDBCol, MDBCard, MDBContainer } from 'mdbreact'

const PromptButton = (props) => {
  return (
    <MDBContainer>
      <MDBRow className="mb-4">
        <MDBCol sm="6">
          <MDBCard className="text-center">
            <MDBCardBody>
              <MDBBtn gradient="peach" size="lg"><Link to="/animals">ANIMALS</Link></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6">
          <MDBCard className="text-center">
            <MDBCardBody>
              <MDBBtn gradient="peach" size="lg"><Link to="/industrial">Industrial</Link></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default PromptButton
