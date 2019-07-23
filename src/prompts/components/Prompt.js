import React, { useState, useEffect } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Prompt = (props) => {
  const [prompt, setPrompt] = useState('')
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    console.log(props.match.params.id)
    axios(`${apiUrl}/prompts/${props.match.params.id}`)
      .then(res => setPrompt(res.data.prompt))
      .catch(console.error)
  }, [])

  const destroy = (user) => {
    axios({
      url: `${apiUrl}/prompts/${props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/' }
    } />
  }

  const ownerButtons = (
    <div>
      <button onClick={destroy}>Delete Prompt</button>
      <Link to={`/prompts/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  )

  return (
    <div>
      <h4>{prompt.text}</h4>
      {props.user && props.user._id === prompt.owner ? ownerButtons : <p>{props.user ? 'You don\'t own this prompt' : 'Sign in to edit your prompts'}</p>}
    </div>
  )
}

export default withRouter(Prompt)
