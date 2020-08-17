import React, { useState, useContext } from 'react';
import AppContext from './AppContext'
import { Link } from 'react-router-dom';

const SignInForm = () => {

    let email, password;

    const [state, setState] = useState(
        {loginSuccess: null}
    )

    const [globalState, setGlobalState] = useContext(AppContext);

    const loginUser = async () => {
        let response = await fetch('http://localhost:3000/login', {
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

        if(json.token) {
            // Change the local state
            setState({ ...state, loginSuccess: true});

            // Change the globa state
            setGlobalState({ ...globalState, loggedIn: 'true'});

            sessionStorage.setItem('jwt', json.token);
        }
        
    }

    return (
        <div className="content-wrapper">
        <div className="row  no-gutters">
            <div className="col-lg-6 hidden-md-down">
                <div className="bg-stretch img-wrap">
                    <img src="img/detective.png" alt="images"/>
                </div>
            </div>
            <div className="col-lg-6 signup-block">
                <div className="signup-wrap text-center">
                    <div className="inner-wrap">
                     
                        <div action="#" method="post" id="contact_form" className="waituk_contact-form signup-form">
                            <h2 className="bottom-space">Existing User Login</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input ref={(inputElem)=>email = inputElem} type="text" placeholder="EMAIL" id="con_uname" name="con_fname" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input ref={(inputElem)=>password = inputElem}  type="password" placeholder="PASSWORD" id="con_password" name="con_lname" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    
                                
                                <div className='centeer'>
                                <p>*If you do not have an account kindly 
                              <strong>  <Link  className="black" to="/register">Register</Link> </strong></p>
                              </div>
                                </div>
                            </div>
                            <div className="btn-container mb-3  mb-xl-3 mt-xl-5 mt-lg-2">
                                <button onClick={loginUser} id="btn_sent" className="btn btn-primary has-radius-small">Login</button>
                            
                            </div>
                            {
                state.loginSuccess &&
                <div 
                    className="alert alert-success" 
                    role="alert" 
                >
                    You're now logged in! <br/>
                    Click on  <strong>  <Link  className="black" to="/profile">Edit Profile</Link> </strong> to complete your profile.
                </div>
            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

  export default SignInForm;