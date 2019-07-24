import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import PromptForm from './PromptForm'
import { withSnackbar } from 'notistack'
import messages from '../../auth/messages'

const EditPrompt = (props) => {
  const [prompt, setPrompt] = useState({ text: '', category: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/prompts/${props.match.params.id}`)
      .then(res => setPrompt(res.data.prompt))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setPrompt(prompt => ({ ...prompt, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/prompts/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { prompt: prompt }
    })
      .then(() => setUpdated(true))
      .then(() => props.enqueueSnackbar(messages.editSuccess, { variant: 'success' }))
      .catch(() => {
        props.enqueueSnackbar(messages.editFailure, { variant: 'error' })
      })
  }
  if (updated) {
    return <Redirect to={`/prompts/${props.match.params.id}`} />
  }
  return (
    <div>
      <PromptForm
        prompt={prompt}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/prompts/${props.match.params.id}`}
      />
    </div>
  )
}

export default withSnackbar(withRouter(EditPrompt))
