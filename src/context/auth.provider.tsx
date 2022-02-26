import React, { useEffect, useState } from 'react';
import AuthContext from './auth.context';

type Props = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState<string>('');

  const localStorageIsLoggedIn = localStorage.getItem('isLoggedIn');
  const localStorageId = localStorage.getItem('id');

  useEffect(() => {
    if (localStorageIsLoggedIn) {
      setIsLoggedIn(true);
    }
    if (localStorageId) {
      setId(localStorageId);
    }
  }, [localStorageId, localStorageIsLoggedIn]);

  const loginHandler = (id: string) => {
    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('id', id);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
  };

  const context = {
    isLoggedIn: isLoggedIn,
    id: id,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
