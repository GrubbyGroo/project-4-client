import React from 'react'
import { Link } from 'react-router-dom'

const PromptButton = (props) => {
  return (
    <React.Fragment>
      <button color="inherit"><Link to="/animals">ANIMALS</Link></button>
      <button color="inherit"><Link to="/industrial">Industrial</Link></button>
    </React.Fragment>
  )
}

export default PromptButton
