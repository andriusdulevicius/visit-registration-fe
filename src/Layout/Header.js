import React from 'react';
import css from './Header.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogout() {
    console.log('logging out');
  }

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to='/' className={css.logo}>
          Book <strong>Your</strong> visit!
        </Link>
        <nav className={css.nav}>
          <Link to='/admin'>For consultants</Link>
        </nav>
        {loggedIn && (
          <nav>
            <span> Logged in as admin</span>
            <Link onClick={handleLogout} to='/login'>
              Logout
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
