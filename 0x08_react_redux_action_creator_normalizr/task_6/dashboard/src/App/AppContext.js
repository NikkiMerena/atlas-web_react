import React from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Placeholder function for logOut
export const logOut = () => {
  console.log("User logged out");
};

// Create and export the context
export const AppContext = React.createContext({
  user: defaultUser,
  logOut: logOut,
});
