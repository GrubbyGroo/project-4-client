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

  const filtedPrompts = prompts.filter(prompt => prompt.category === 'animals')
  const item = filtedPrompts[Math.floor(Math.random() * filtedPrompts.length)]

  // const promptsJsx = item.map(prompt => (
  //   <li key={prompt._id}>
  //     {console.log(prompt._id)}
  //     <Link to={`/prompts/${prompt._id}`}>{prompt.text}</Link>
  //   </li>
  // ))
  console.log(props.location)
  return (
    <div>
      <h4>Animals</h4>
      <div>{item && item.text}</div>
      <Link to="/animals" >Get another</Link>
    </div>
  )
}

export default Prompts
