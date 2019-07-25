import React, { useState, useEffect } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withSnackbar } from 'notistack'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBCardText } from 'mdbreact'
import messages from '../../auth/messages'

const Prompt = (props) => {
  const [prompt, setPrompt] = useState('')
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/prompts/${props.match.params.id}`)
      .then(res => setPrompt(res.data.prompt))
      .catch(() => {
        props.enqueueSnackbar(messages.getFailure, { variant: 'error' })
      })
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
      .then(() => props.enqueueSnackbar(messages.deleteSuccess, { variant: 'success' }))
      .catch(() => {
        props.enqueueSnackbar(messages.deleteFailure, { variant: 'error' })
      })
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/your-prompts' }
    } />
  }

  const ownerButtons = (
    <div>
      <Link to={`/prompts/${props.match.params.id}/edit`}>
        <MDBBtn color="elegant">Edit</MDBBtn>
      </Link>
      <MDBBtn color="mdb-color" type="submit" onClick={destroy}>Delete Prompt</MDBBtn>
    </div>
  )

  return (
    <MDBContainer className='w-responsive text-left mx-auto p-3 mt-2'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Text: {prompt.text}</MDBCardTitle>
          <MDBCardText>Category: {prompt.category}</MDBCardText>
          {props.user && props.user._id === prompt.owner ? ownerButtons : <p>{props.user ? 'You don\'t own this prompt' : 'Sign in to edit your prompts'}</p>}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default withSnackbar(withRouter(Prompt))
