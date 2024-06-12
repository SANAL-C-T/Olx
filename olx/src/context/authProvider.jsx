import React, { useState } from 'react';
import AuthContext from './authContext';

const AuthContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);

  const userStatus = {
    userLogged,
    setUserLogged,
  };

  return (
    <AuthContext.Provider value={userStatus}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;


