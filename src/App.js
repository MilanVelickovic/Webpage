import React from 'react';

// Components
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Newspapers from './components/Newspapers/Newspapers';
import Books from './components/Books/Books';
import FreeContent from './components/FreeContent/FreeContent';
import Application from './components/Application/Application';
import Footer from './components/Footer/Footer';

// CSS
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header/>
      <Slider/>
      <Newspapers/>
      <Books/>
      <FreeContent/>
      <Books/>
      <Application/>
      <Footer/>
    </div>
  );
}

export default App;
