import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Prompts = (props) => {
  const [prompts, setPrompts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/prompts`)
      .then(res => setPrompts(res.data.prompts))
      .catch(console.error)
  }, [])

  // const filtedPrompts = prompts.filter(prompt => prompt.category === 'test')
  //
  // const item = filtedPrompts[Math.floor(Math.random() * filtedPrompts.length)]

  // <div>Prompt: {item && item.text}</div>
  // <div>Category: {item && item.category}</div>
  const promptsJsx = prompts.map(prompt => (
    <li key={prompt._id}>
      {console.log(prompt._id)}
      <Link to={`/prompts/${prompt._id}`}>{prompt.text}</Link>
    </li>
  ))

  return (
    <div>
      <h4>Prompts</h4>
      <ul>
        {promptsJsx}
      </ul>
    </div>
  )
}

export default Prompts
