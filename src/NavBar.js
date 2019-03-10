import React from 'react';
import {Link} from 'react-router-dom';
import './css/NavBar.css'

const NavBar = (props) => {

  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/cakes">Cakes</Link>
        </li>
        <li className="navLink">
        <Link to="/cakes/new">Add a Cake</Link>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
