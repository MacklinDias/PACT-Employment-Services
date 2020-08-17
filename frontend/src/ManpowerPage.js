import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Manpower from './Manpower';
import Footer from './Footer';
import MainBanner from './MainBanner';






const ManpowerPage = () => {
  return (
    <div className="ManpowerPage">

        <Header />
   
        <Manpower />
        <Footer />
   
    </div>
  );
}



export default ManpowerPage;