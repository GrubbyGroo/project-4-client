import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { shuffle } from 'underscore'

import apiUrl from '../../apiConfig'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn } from 'mdbreact'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .then()
      .catch(console.error)
  }, [])

  const filtedPrompts = prompts.filter(prompt => prompt.category === props.category.toLowerCase())

  const shuffler = shuffle(filtedPrompts).slice(0, 1)

  return (
    <MDBContainer className='w-responsive text-center mx-auto p-3 mt-2'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>{props.category}</MDBCardText>
          <MDBCardTitle>{shuffler[0] && shuffler[0].text}</MDBCardTitle>
          <Link to={`/${props.category.toLowerCase()}`} ><MDBBtn outline color="primary">Get another</MDBBtn>
          </Link>
          <Link to={'/'} ><MDBBtn outline color="warning">Go Back</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Prompts
