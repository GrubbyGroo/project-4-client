import React, { useState, useEffect } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer } from 'mdbreact'

const Prompt = (props) => {
  const [prompt, setPrompt] = useState('')
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/prompts/${props.match.params.id}`)
      .then(res => setPrompt(res.data.prompt))
      .catch(console.error)
  }, [])

  const destroy = (user) => {
    axios({
      url: `${apiUrl}/prompts/${props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/' }
    } />
  }

  const ownerButtons = (
    <div>
      <MDBBtn type="submit" onClick={destroy}>Delete Prompt</MDBBtn>
      <Link to={`/prompts/${props.match.params.id}/edit`}>
        <MDBBtn>Edit</MDBBtn>
      </Link>
    </div>
  )

  return (
    <MDBContainer className='w-responsive text-left mx-auto p-3 mt-2'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{prompt.text}</MDBCardTitle>
          {props.user && props.user._id === prompt.owner ? ownerButtons : <p>{props.user ? 'You don\'t own this prompt' : 'Sign in to edit your prompts'}</p>}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default withRouter(Prompt)
