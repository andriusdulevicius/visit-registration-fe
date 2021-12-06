import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogout() {
    console.log('logging out');
  }

  return (
    <header>
      <Link to='/'>
        Book <strong>Your</strong> visit!
      </Link>
      <nav>
        <Link to='/register'>Book a visit</Link>
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
    </header>
  );
};

export default Header;
