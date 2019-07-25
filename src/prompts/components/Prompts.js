import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import messages from '../../auth/messages'
import apiUrl from '../../apiConfig'
import { withSnackbar } from 'notistack'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn } from 'mdbreact'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])
  const [currentItem, setCurrentItem] = useState({})

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => {
        const filteredPrompts = res.data.prompts.filter(prompt => prompt.category === props.category.toLowerCase())
        setPrompts(filteredPrompts)
        setCurrentItem(filteredPrompts[0])
      })
      .then(() => props.enqueueSnackbar(messages.getSuccess, { variant: 'success' }))
      .catch(() => {
        props.enqueueSnackbar(messages.deleteFailure, { variant: 'error' })
      })
  }, [])

  const func = () => {
    // creat a new index, where the index of current item, matches index at prompt
    let newItemIndex = prompts.findIndex(prompt => (currentItem._id === prompt._id))
    // set current index to the same index
    const currentItemIndex = newItemIndex
    // if they match, add 1 to new item index
    while (currentItemIndex === newItemIndex) {
      newItemIndex = Math.floor(Math.random() * prompts.length)
    }
    setCurrentItem(prompts[newItemIndex])
  }

  return (
    <MDBContainer className='w-responsive text-center p-3 mb-4 mt-2'>
      <MDBCard className="mt-2">
        <MDBCardBody>
          <MDBCardText>{props.category}</MDBCardText>
          <MDBCardTitle>{currentItem && currentItem.text}</MDBCardTitle>
          <MDBBtn outline color="primary" onClick={func}>Get another</MDBBtn>
          <Link to={'/'} ><MDBBtn outline color="warning">Go Back</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default withSnackbar(Prompts)
