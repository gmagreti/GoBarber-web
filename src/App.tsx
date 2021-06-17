import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthProvider } from './hook/AutheContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
