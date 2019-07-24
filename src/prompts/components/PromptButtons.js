import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBCardBody, MDBRow, MDBCol, MDBCard, MDBContainer } from 'mdbreact'
const categories = ['animals', 'industrial']
const PromptButton = (props) => {
  return (
    <MDBContainer>
      <MDBRow className="mb-4">
        {categories.map(item =>
          <MDBCol key={item} sm="6">
            <MDBCard className="text-center">
              <MDBCardBody>
                <MDBBtn gradient="peach" size="lg"><Link to={`/${item}`}>{item.toUpperCase()}</Link></MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  )
}

export default PromptButton
