import React from 'react';
import logoImg from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logoImg} alt="Logo" className="logo" />
    </header>
  );
}

export default Header;
