// Write your JS code here
import {Component} from 'react'
import './index.css'

// const LoginForm = props => {
//   const {v} = props
//   return (

//   )
// }

class LoginForm extends Component {
  state = {usernameInput: '', passwordInput: ''}

  EnteredUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  EnteredPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  render() {
    const {usernameInput, passwordInput} = this.state

    return (
      <div className="login-page-bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
        </div>
        <div className="login-form-container">
          <form onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="web-site-logo"
            />
            <div className="username-input-element-container">
              <label className="username-label" htmlFor="username">
                USERNAME
              </label>
              <input
                onChange={this.EnteredUsername}
                className="username-input"
                id="username"
                type="text"
                value={usernameInput}
              />
            </div>
            <div className="username-input-element-container">
              <label className="username-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                onChange={this.EnteredPassword}
                className="username-input"
                id="password"
                type="text"
                value={passwordInput}
              />
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
