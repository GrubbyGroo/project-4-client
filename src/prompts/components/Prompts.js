import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from '../../apiConfig'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn } from 'mdbreact'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .catch(console.error)
  }, [])

  const filtedPrompts = prompts.filter(prompt => prompt.category === props.category.toLowerCase())
  const item = filtedPrompts[Math.floor(Math.random() * filtedPrompts.length)]

  return (
    <MDBContainer className='w-responsive text-center mx-auto p-3 mt-2'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardText>{props.category}</MDBCardText>
          <MDBCardTitle>{item && item.text}</MDBCardTitle>
          <Link to={`/${props.category.toLowerCase()}`} ><MDBBtn outline color="primary">Get another</MDBBtn></Link>
          <Link to={'/'} ><MDBBtn outline color="warning">Go Back</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Prompts
