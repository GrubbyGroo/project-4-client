import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBCardBody, MDBRow, MDBCol, MDBCard, MDBContainer, MDBCardTitle, MDBCardText } from 'mdbreact'
const categories = ['animals', 'industrial']
const unauthenticatedOptions = (
  <React.Fragment>
    <MDBCardTitle>Click a Category Below to Get a Prompt!</MDBCardTitle>
    <MDBCardText>Sign in to add your own!</MDBCardText>
  </React.Fragment>
)

const authenticatedOptions = (
  <React.Fragment>
    <MDBCardTitle>Click a Category Below to Get a Prompt!</MDBCardTitle>
  </React.Fragment>
)

const PromptButton = (props) => {
  return (
    <MDBContainer>
      <MDBCard className="text-center" color="grey lighten-2">
        { props.user ? authenticatedOptions : unauthenticatedOptions }
      </MDBCard>
      <MDBRow className="mt-5 mb-4">
        {categories.map(item =>
          <MDBCol key={item} sm="6">
            <MDBCard className="text-center white-text" color="grey lighten-2">
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
