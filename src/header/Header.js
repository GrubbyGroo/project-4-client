import React from 'react'
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import './Header.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

const authenticatedOptions = (
  <React.Fragment>
    <Button color="inherit"><Link to="/change-password">Change Password</Link></Button>
    <Button color="inherit"><Link to="/sign-out">Sign Out</Link></Button>
    <Button color="inherit"><Link to="/create-prompt">Create A Prompt!</Link></Button>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Button color="inherit"><Link to="/sign-up">Sign Up</Link></Button>
    <Button color="inherit"><Link to="/sign-in">Sign In</Link></Button>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Button color="inherit"><Link to="/">Home</Link></Button>
  </React.Fragment>
)

const Header = ({ user }) => (
  <div className={useStyles.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <h1>Always Be Drawing</h1>
        { user && <span>Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
        { alwaysOptions }
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
