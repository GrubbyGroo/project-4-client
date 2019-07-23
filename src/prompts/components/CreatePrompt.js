import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import apiUrl from '../../apiConfig'
import PromptForm from './PromptForm'
import messages from '../../auth/messages'

const PromptCreate = (props) => {
  const [prompt, setPrompt] = useState({
  })
  const [createdPromptId, setCreatedPromptId] = useState('')

  const handleChange = event => {
    event.persist()
    const updatedField = { [event.target.name]: event.target.value }
    const editedPrompt = Object.assign(prompt, updatedField)
    setPrompt(editedPrompt)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/prompts`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { prompt: prompt }
    })
      .then(res => setCreatedPromptId(res.data.prompt._id))
      .then(() => this.enqueueSnackbar(messages.signInSuccess, { variant: 'success' }))
      .then(console.log(createdPromptId))
      .catch(console.error)
  }

  if (createdPromptId) {
    return <Redirect to={`/prompts/${createdPromptId}`} />
  }

  return (
    <div>
      <PromptForm
        prompt={prompt}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </div>
  )
}

export default withSnackbar(withRouter(PromptCreate))
