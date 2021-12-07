import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import AdminScreen from '../AdminScreen/AdminScreen';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn && <AdminScreen setIsLoggedIn={setIsLoggedIn} />}
      {!isLoggedIn && <LoginForm setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
};

export default Admin;
