import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {

  return (
    <header>

      <ul>
        <li className="navLink">
          <Link to="/pirates">Pirates</Link>
        </li>
        <li className="navLink">
        <Link to="pirates/new">Add Pirate</Link>
        </li>
        <li className="navLink">
          <Link to="/ships">Ships</Link>
        </li>
        <li className="navLink">
          <Link to="/raids" >Raids</Link>
        </li>

      </ul>
    </header>
  )
}

export NavBar;
