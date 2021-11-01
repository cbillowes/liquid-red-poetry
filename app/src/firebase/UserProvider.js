import React from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
};

