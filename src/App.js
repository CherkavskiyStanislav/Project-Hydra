import React from 'react';
import './App.scss';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer'
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18n.js'; 
import Registration from './registration/Registration';


function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Header />
        <Main />
        <Registration />
        <Footer /> 
      </I18nextProvider>
    </>
  );
}

export default App;
