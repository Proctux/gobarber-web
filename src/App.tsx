import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      {/* <SignUp /> */}
      <GlobalStyle />
    </>
  );
};

export default App;
