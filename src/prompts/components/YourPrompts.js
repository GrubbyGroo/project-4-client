import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Prompts = (props, state) => {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .catch(console.error)
  }, [])

  console.log('user', props.user._id)
  const filtedPrompts = prompts.filter(prompt => prompt.owner === props.user._id)
  console.log(prompts)
  console.log('owned', filtedPrompts)
  const promptsJsx = filtedPrompts.map(prompt => (
    <ol key={prompt._id}>
      {console.log(prompt._id)}
      <Link to={`/prompts/${prompt._id}`}>{prompt.text}</Link>
    </ol>
  ))
  console.log(props.location)
  return (
    <div>
      <h4>Your Prompts! Click to Edit or Delete</h4>
      {promptsJsx}
    </div>
  )
}

export default Prompts
