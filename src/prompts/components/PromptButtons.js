import React from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBCardBody, MDBRow, MDBCol, MDBCard, MDBContainer, MDBCardTitle, MDBCardText } from 'mdbreact'
const categories = ['animals', 'industrial', 'people', 'food', 'open-ended', 'creative']
const unauthenticatedOptions = (
  <React.Fragment>
    <h2 className="MDBCardTitle">A Random Drawing Prompt Generator!</h2>
    <MDBCardTitle>Click a Category Below to Get a Prompt!</MDBCardTitle>
    <div className="card-text text-danger">Sign in to add your own prompt to the database!</div>
  </React.Fragment>
)

const authenticatedOptions = (
  <React.Fragment>
    <h2 className="MDBCardTitle">A Random Drawing Prompt Generator!</h2>
    <MDBCardText>Click a Category Below to Get a Prompt!</MDBCardText>
  </React.Fragment>
)

const PromptButton = (props) => {
  return (
    <MDBContainer classNanme="p-5">
      <MDBCard className="text-center" color="grey lighten-2">
        { props.user ? authenticatedOptions : unauthenticatedOptions }
      </MDBCard>
      <MDBRow className="mt-5 mb-4">
        {categories.map(item =>
          <MDBCol key={item} sm="6">
            <MDBCard className="text-center white-text mb-4 " color="grey lighten-2">
              <MDBCardBody>
                <Link to={`/${item}`}><MDBBtn color="elegant" size="lg">{item.toUpperCase()}</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  )
}

export default PromptButton
