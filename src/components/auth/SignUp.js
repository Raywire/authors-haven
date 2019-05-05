import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import {  authStatus } from '../../helpers/authStatus';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpUser(this.state);
  }

  render() {
    if (authStatus() === true) return <Redirect to="/signin" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" onChange={this.handleChange}/>
          </div>          
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>         
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    // authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user) => dispatch(signUpUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
