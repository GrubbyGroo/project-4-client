import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import PromptForm from './PromptForm'

const PromptCreate = (props) => {
  const [prompt, setPrompt] = useState({
  })
  const [createdPromptId, setCreatedPromptId] = useState(null)
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
      data: { prompt: prompt }
    })
      .then(res => setCreatedPromptId(res.data.prompt.id))
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

export default PromptCreate
