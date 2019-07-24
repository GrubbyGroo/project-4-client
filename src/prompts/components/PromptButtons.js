import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBCardBody, MDBRow, MDBCol, MDBCard, MDBContainer } from 'mdbreact'
const categories = ['animals', 'industrial']
const PromptButton = (props) => {
  return (
    <MDBContainer>
      <MDBCard className="text-center">
        <h4 className="text-center">Pick a Prompt Category Below!</h4>
      </MDBCard>
      <MDBRow className="mt-5 mb-4">
        {categories.map(item =>
          <MDBCol key={item} sm="6">
            <MDBCard className="text-center">
              <MDBCardBody>
                <Link to={`/${item}`}><MDBBtn gradient="peach" size="lg">{item.toUpperCase()}</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  )
}

export default PromptButton
