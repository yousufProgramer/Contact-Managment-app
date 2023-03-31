import React from 'react';
import UserProvider from './UserProvider';

export const ContextProviderWrapper = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default ContextProviderWrapper;
