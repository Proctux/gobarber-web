import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Luiz' }}>
        <SignIn />
        {/* <SignUp /> */}
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
