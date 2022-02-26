import React, { useEffect, useState } from 'react';
import AuthContext from './auth.context';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const localStorageIsLoggedIn = localStorage.getItem('isLoggedIn');
  const localStorageEmail = localStorage.getItem('email');

  useEffect(() => {
    if (localStorageIsLoggedIn) {
      setIsLoggedIn(true);
    }
    if (localStorageEmail) {
      setEmail(localStorageEmail);
    }
  }, [localStorageEmail, localStorageIsLoggedIn]);

  const loginHandler = (email: string) => {
    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('email', email);
    setEmail(email);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    setEmail('');
    setIsLoggedIn(false);
  };

  const context = {
    isLoggedIn: isLoggedIn,
    email: email,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
