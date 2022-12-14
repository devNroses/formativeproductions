import './header-styles.scss';

import React, { useState } from 'react';

import Logo2 from '../../assets/images/formative-logo.png';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
        <button
          className={showMenu ? "change" : ""}
          onClick={() => toggleMenu()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </div>

      {showMenu && <div className="nav-list"></div>}
    </nav>
  );
};

export default Header;
