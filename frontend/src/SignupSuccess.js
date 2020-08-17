import React from 'react';
import { Link } from 'react-router-dom';


const SignupSuccess = (prop) => {


    return (
    <               div className="content-wrapper">
                        <div className="row no-gutters">
                            <div className="col-lg-6 hidden-md-down">
                                <div className="bg-stretch img-wrap">
                                    <img src="img/relaxation.png" alt="images"/>
                                </div>
                            </div>
                            <div className="col-lg-6 signup-block">
                                <div className="signup-wrap text-center">
                                    <div className="inner-wrap">
                                        <div className="circular-icon bottom-space"><i className="icon-envelope-1"></i></div>
                                        <div action="#" method="post" id="contact_form" className="waituk_contact-form signup-form">
                                            <p><big>Congratulations! Your registration was successful. </big></p>
                                            <div className="btn-container mb-3  mb-xl-3 mt-xl-5 mt-lg-2">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                               </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
  }

  export default SignupSuccess;