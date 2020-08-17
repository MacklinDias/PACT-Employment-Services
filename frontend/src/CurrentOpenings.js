import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Openings from './Openings';
import Footer from './Footer';






const CurrentOpenings = () => {
  return (
    <div className="CurrentOpenings">

        <Header />
        <Openings />
        <Footer />
   
    </div>
  );
}



export default CurrentOpenings;
