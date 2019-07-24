import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from '../../apiConfig'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .catch(console.error)
  }, [])

  const filtedPrompts = prompts.filter(prompt => prompt.category === props.category.toLowerCase())
  const item = filtedPrompts[Math.floor(Math.random() * filtedPrompts.length)]

  console.log(props.location)
  return (
    <MDBContainer>
      <MDBCard style={{ width: '22rem' }}>
        <MDBCardBody>
          <MDBCardTitle>{props.category}</MDBCardTitle>
          <MDBCardText>{item && item.text}</MDBCardText>
          <Link to={`/${props.category.toLowerCase()}`} >Get another</Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Prompts
