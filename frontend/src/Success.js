import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';
import SignupSuccess from './SignupSuccess';






const Success = () => {
  return (
    <div className="Success">

        <HeaderTwo />
        <SignupSuccess/>
        <Footer />
   
    </div>
  );
}



export default Success;
