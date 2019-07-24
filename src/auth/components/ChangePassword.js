import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { changePassword } from '../api'
import messages from '../messages'
import { MDBBtn, MDBInput, MDBContainer, MDBCard, MDBCardBody } from 'mdbreact'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { enqueueSnackbar, history, user } = this.props

    changePassword(this.state, user)
      .then(() => enqueueSnackbar(messages.changePasswordSuccess, { variant: 'success' }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        enqueueSnackbar(messages.changePasswordFailure, { variant: 'error' })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <MDBContainer>
        <MDBCard className="text-center">
          <MDBCardBody>
            <form className='auth-form' onSubmit={this.onChangePassword}>
              <h3>Change Password</h3>

              <MDBInput label="Old Password"
                required
                name="oldPassword"
                value={oldPassword}
                type="password"
                placeholder="Old Password"
                onChange={this.handleChange}
              />

              <MDBInput label="New Password"
                required
                name="newPassword"
                value={newPassword}
                type="password"
                placeholder="New Password"
                onChange={this.handleChange}
              />
              <MDBBtn color="primary" type="submit">Change Password</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  }
}

export default withSnackbar(withRouter(ChangePassword))
