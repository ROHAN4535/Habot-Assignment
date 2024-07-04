import React from 'react';
import Header from './components/Header'; 
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import Growth from './components/Growth'
import Requirement from './components/Requirement';
import Verify from './components/Verify';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0' }}>
      <Header />
      <BackgroundImage/>
      <Growth />
      <Requirement/>
      <Verify />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
