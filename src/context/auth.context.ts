import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: '',
  onLogin: (email: string) => {},
  onLogout: () => {},
});

export default AuthContext;
