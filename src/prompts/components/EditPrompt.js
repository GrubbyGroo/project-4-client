import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import PromptForm from './PromptForm'

const EditPrompt = (props) => {
  const [prompt, setPrompt] = useState({ text: '', category: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    console.log(props.match.params.id)
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
      .catch(console.error)
  }
  if (updated) {
    return <Redirect to={`/prompts/${props.match.params.id}`} />
  }
  return (
    <div>
    test
      <PromptForm
        prompt={prompt}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={'/prompts'}
      />
    </div>
  )
}

export default withRouter(EditPrompt)
