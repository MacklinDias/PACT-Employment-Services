import React from 'react';
import './App.css';
import HeaderTwo from './HeaderTwo';
import Footer from './Footer';
import SignInForm from './SignInForm';





const SignIn = () => {
  return (
    <div className="SignIn">

        <HeaderTwo />
        <SignInForm />
        <Footer />
   
    </div>
  );
}



export default SignIn;
