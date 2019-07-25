import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../../auth/messages'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .then(() => setloaded(true))
      .catch(() => {
        props.enqueueSnackbar(messages.getFailure, { variant: 'error' })
      })
  }, [])

  const filtedPrompts = prompts.filter(prompt => prompt.owner === props.user._id)
  const promptsJsx = filtedPrompts.map(prompt => (
    <MDBCardText key={prompt._id}><ol>
      <Link to={`/prompts/${prompt._id}`}>{prompt.text} </Link></ol></MDBCardText>
  ))

  if (!loaded) {
    return <p>Loading...</p>
  }

  if (filtedPrompts.length === 0) {
    return <MDBContainer className='w-responsive text-left mx-auto p-3 mt-2'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>No Prompts! Click Create Above to Make one!</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  }

  return (
    <MDBContainer className='w-responsive text-left mx-auto p-3 mt-2'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Click to View, Edit and Delete</MDBCardTitle>
          <MDBCardText>{promptsJsx}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Prompts
