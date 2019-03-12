import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const links = ['/users', '/things'];
  return (
    <ul>
      {
        links.map(link => (
          <li className="nav-item" key={link}>
            <Link to={link} className="nav-link">{link.slice(1)}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Nav;
