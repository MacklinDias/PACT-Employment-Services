import React from 'react';


const Footer = (prop) => {

 

    return (
        <footer className="footer footer-v1">
        <div className="content-block footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-left">
                        <div className="footer-nav inline-nav">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <ul className="social-network with-text">
                                    <li><a href="#"><span className="icon-facebook"></span></a></li>
                                    <li><a href="#"><span className="icon-twitter"></span></a></li>
                                    <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                    <li><a href="#"><span className="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="divider-border-dark"><span className="sr-only">&nbsp;</span></div>
                <div className="footer-logo text-center">
                    <div>PACT Employment Services - Copyright 2019</div>
                </div>
            </div>
        </div>
    </footer>
  
    )
  }

  export default Footer;