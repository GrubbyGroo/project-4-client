import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
// import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Prompt from './prompts/components/Prompt'
import Prompts from './prompts/components/Prompts'
import CreatePrompt from './prompts/components/CreatePrompt'
import EditPrompt from './prompts/components/EditPrompt'
import YourPrompts from './prompts/components/YourPrompts'
import Header from './header/Header'
import Home from './Home'
import { SnackbarProvider } from 'notistack'
import mobileImage from './npage.jpg'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (

      <SnackbarProvider maxSnack={2}>
        <Header user={user} />
        <div className="App" style={{ backgroundImage: `url(${mobileImage})` }} >
          <main className="container">
            <Route exact path='/sign-up' render={() => (
              <SignUp alert={this.alert} setUser={this.setUser} />
            )} />
            <Route exact path='/' user={user} render={() => (
              <Home alert={this.alert} user={user} setUser={this.setUser} />
            )} />
            <Route exact path='/animals' user={user} render={() => (
              <Prompts alert={this.alert} category="Animals" setUser={this.setUser} />
            )} />
            <Route exact path='/industrial' user={user} render={() => (
              <Prompts alert={this.alert} category="Industrial" setUser={this.setUser} />
            )} />
            <AuthenticatedRoute
              user={user}
              exact path='/create-prompt'
              render={() => (
                <CreatePrompt alert={this.alert} user={user} />
              )} />
            <AuthenticatedRoute
              user={user}
              exact path='/your-prompts'
              render={() => (
                <YourPrompts alert={this.alert} user={user} />
              )} />
            <Route exact path='/sign-in' render={() => (
              <SignIn alert={this.alert} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
              <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
            )} />
            <Route
              exact path='/prompts/:id'
              render={() => (
                <Prompt user={user} />
              )} />
            <Route
              exact path='/prompts/:id/edit'
              render={() => (
                <EditPrompt user={user} />
              )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword alert={this.alert} user={user} />
            )} />
          </main>
        </div>
      </SnackbarProvider>

    )
  }
}

export default App
