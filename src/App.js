import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
// import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Prompt from './prompts/components/Prompt'
import Animals from './prompts/components/Animals'
import Industrial from './prompts/components/Industrial'
import CreatePrompt from './prompts/components/CreatePrompt'
import EditPrompt from './prompts/components/EditPrompt'
import YourPrompts from './prompts/components/YourPrompts'
import Header from './header/Header'
import Home from './Home'
import { SnackbarProvider } from 'notistack'

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
      <SnackbarProvider maxSnack={3}>
        <Header user={user} />
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/' render={() => (
            <Home alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/animals' render={() => (
            <Animals alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/industrial' render={() => (
            <Industrial alert={this.alert} setUser={this.setUser} />
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
      </SnackbarProvider>
    )
  }
}

export default App
