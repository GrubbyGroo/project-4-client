import React from 'react'
import { Link } from 'react-router-dom'
import { MDBInput, MDBBtn } from 'mdbreact'

// const categories = ['Animals', 'Industrial']

const PromptForm = ({ prompt, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <MDBInput label="Text"
      placeholder="Text"
      value={prompt.text}
      name="text"
      onChange={handleChange}
    />

    <label>Category</label>
    <select name="category" onChange={handleChange} className="browser-default custom-select">
      <option
        value=''
        default
      >Select a Category</option>
      <option
        value='animals'
      >Animals</option>
      <option
        value='industrial'
      >Industrial</option>
    </select>

    <MDBBtn type="submit">Submit</MDBBtn>
    <Link to={cancelPath}>
      <MDBBtn color="secondary">Cancel</MDBBtn>
    </Link>
  </form>
)

export default PromptForm
