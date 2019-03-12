import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
  const pathname = location.pathname;
  const links = ['/users', '/things'];
  return (
    <ul className="nav nav-pills">
      {links.map(link => (
        <li className="nav-item" key={link}>
          <Link
            to={link}
            className={`nav-link${link === pathname ? ' active' : ''}`}
          >
            {link.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
