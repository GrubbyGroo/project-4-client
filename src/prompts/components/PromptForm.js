import React from 'react'
import { Link } from 'react-router-dom'
import { MDBInput, MDBBtn } from 'mdbreact'

// const categories = ['Animals', 'Industrial']

const PromptForm = ({ prompt, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <MDBInput label="Text"
      required
      placeholder="Text"
      value={prompt.text}
      name="text"
      onChange={handleChange}
    />

    <label>Category</label>
    <select name="category" onChange={handleChange} required className="browser-default custom-select">
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
      <option
        value='people'
      >People</option>
      <option
        value='food'
      >Food</option>
    </select>

    <MDBBtn color="blue-grey" type="submit">Submit</MDBBtn>
    <Link to={cancelPath}>
      <MDBBtn color="mdb-color">Cancel</MDBBtn>
    </Link>
  </form>
)

export default PromptForm
