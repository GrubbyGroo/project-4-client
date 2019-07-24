import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { signUp, signIn } from '../api'
import messages from '../messages'
import { MDBBtn, MDBInput, MDBContainer, MDBCard, MDBCardBody } from 'mdbreact'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { enqueueSnackbar, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => enqueueSnackbar(messages.signUpSuccess, { variant: 'success' }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        enqueueSnackbar(messages.signUpFailure, { variant: 'error' })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <MDBContainer>
        <MDBCard className="text-center">
          <MDBCardBody>
            <form className='auth-form' onSubmit={this.onSignUp}>
              <h3>Sign Up</h3>

              <MDBInput label="Email"
                required
                name="email"
                value={email}
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <MDBInput label="Password"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <MDBInput label="Confirm Password"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
              <MDBBtn type="submit">Sign Up</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}

export default withSnackbar(withRouter(SignUp))
