import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSignOut } from '../../helpers/authSignOut';

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/create">New Article</NavLink></li>
        <li><a href="/signin" onClick={authSignOut}>Log Out</a></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">RW</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks;
