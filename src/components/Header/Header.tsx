import './header-styles.scss';

import React from 'react';

import Logo2 from '../../assets/images/formative-logo.png';

const Header: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img
          style={{ width: "100%", height: "40px" }}
          src={Logo2}
          alt="Formative Logo"
        />
      </div>
      <div className="nav-pages">
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
