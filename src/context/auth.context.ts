import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  id: '',
  onLogin: (id: string) => {},
  onLogout: () => {},
});

export default AuthContext;
