import React from 'react'
import { Link } from 'react-router-dom'

const PromptForm = ({ prompt, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Text</label>
    <input
      placeholder="Text"
      value={prompt.text}
      name="text"
      onChange={handleChange}
    />

    <label>Category</label>
    <input
      placeholder="Category"
      value={prompt.category}
      name="category"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default PromptForm
