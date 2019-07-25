import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { signIn } from '../api'
import messages from '../messages'
import { MDBBtn, MDBInput, MDBContainer, MDBCard, MDBCardBody } from 'mdbreact'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { enqueueSnackbar, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => enqueueSnackbar(messages.signInSuccess, { variant: 'success' }))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ email: '', password: '' })
        enqueueSnackbar(messages.signInFailure, { variant: 'error' })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <MDBContainer>
        <MDBCard className="text-center">
          <MDBCardBody>
            <form className='auth-form' onSubmit={this.onSignIn}>
              <h3>Sign In</h3>
              <MDBInput label="Email"
                required
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <MDBInput label="Password"
                required
                name="password"
                value={password}
                type="password"
                onChange={this.handleChange}
              />
              <MDBBtn color="blue-grey" type="submit">Sign In</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}

export default withSnackbar(withRouter(SignIn))
