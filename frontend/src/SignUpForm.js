import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const SignUpForm = (prop) => {

        let email, password;
    
        const [state, setState] = useState(
            {
                errors: [],
                registrationSuccess: false
            }
        )
    
        const validateForm = () => {

            // This array will replace what's inside the state
            const errors = [];
    
            if(!validateEmail(email.value)) {
                errors.push('Please enter a valid email address')
            }
            if(password.value.length < 8 || password.value.length > 16) {
                errors.push('Please enter a password between 8 to 16 characters')
            }
        
            setState({ ...state, errors: errors })
            return errors;
        }
    
        const registerUser = async () => {
            if(validateForm().length === 0) {
                // Step 1. Configure fetch and post data to amingo
               let response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            email: email.value,
                            password: password.value,
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                let json = await response.json();   

                console.log('response from amingo', json)
                setState({ ...state, registrationSuccess: true, errors: []})
            }
        }
    
    

    return (
        <div className="content-wrapper">
        <div className="row no-gutters">
            <div className="col-lg-6 hidden-md-down">
                <div className="bg-stretch img-wrap">
                    <img src="img/businessstress.png" alt="images"/>
                </div>
            </div>
            <div className="col-lg-6 signup-block">
                <div className="signup-wrap text-center">
                    <div className="inner-wrap">
                       
                        <div action="#" method="post" id="contact_form" className="waituk_contact-form signup-form">
                            <h2 className="bottom-space">Register with PACT</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input ref={(elem)=>email = elem} type="email" placeholder="EMAIL ADDRESS" id="con_email" name="con_fname" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input ref={(elem)=>password = elem} type="password" placeholder="PASSWORD" id="con_password" name="con_lname" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <p>By clicking on the “Create Account” button below, you are agreeing to
                                <a href="#"> our terms of services. </a></p>
                            <div className="btn-container mt-xl-5 mt-lg-2">
                            { 
                                !state.registrationSuccess && 
                                <button id="btn_sent" className="btn btn-primary has-radius-small" onClick={registerUser} >CREATE ACCOUNT</button>
                            }
                            </div>
                            {  state.errors.length > 0 &&
                <div 
                    className="alert alert-danger" 
                    role="alert" 
                >
                        Please correct the following errors:
                        <ul>
                            {  
                                state.errors.map(
                                    (error)=><li>{error}</li>
                                )
                            }
                        </ul>
                </div>
            } 
            {
                state.registrationSuccess &&
              <Redirect to="/success"></Redirect>
            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

  export default SignUpForm;