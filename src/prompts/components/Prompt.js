import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Prompt = (props) => {
  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    console.log(props.match.params.id)
    axios(`${apiUrl}/prompts/${props.match.params.id}`)
      .then(res => setPrompt(res.data.prompt))
      .catch(console.error)
  }, [])

  return (
    <div>
      <h4>{prompt.text}</h4>
    </div>
  )
}

export default withRouter(Prompt)
