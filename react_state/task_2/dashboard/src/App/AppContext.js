import React from 'react';

// Define the default user object and logout function
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const logOut = () => {
  console.log("User logged out"); // Placeholder function
};

// Create a Context with a default user object and logOut function
const AppContext = React.createContext({ user: defaultUser, logOut });

export default AppContext;
