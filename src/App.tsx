import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
        {/* <SignUp /> */}
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
