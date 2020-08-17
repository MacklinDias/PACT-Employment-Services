import React, { useState, useContext } from 'react';
import AppContext from './AppContext'
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const Profile = (prop) => {

    let firstname, lastname, email, message, phone, male, female;

    const [state, setState] = useState(
        {
            errors: [],
            registrationSuccess: false
        }
    )
    
    const [globalState, setGlobalState] = useContext(AppContext);

    const validateForm = () => {

        // This array will replace what's inside the state
        const errors = [];

        if(firstname.value.length === 0) {
            errors.push('Please enter your first name')
        }
        if(lastname.value.length === 0) {
            errors.push('Please enter your last name')
        }
        if(!validateEmail(email.value)) {
            errors.push('Please enter a valid email address')
        }
        if(message.value.length < 30 || message.value.length > 160) {
            errors.push('Your bio should be between 30 to 160 characters')
        }
        if(phone.value.length === 0) {
            errors.push('Please enter your phone number')
        }

        setState({ ...state, errors: errors })
        return errors;
    }

    const sendInfo = () => {
        if(validateForm().length === 0) {
            // Step 1. Configure fetch and post data to amingo
            fetch('http://localhost:3000/profile', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        firstname: firstname.value,
                        lastname: lastname.value,
                        email: email.value,
                        message: message.value,
                        phone: phone.value,
                        male: male.value,
                        female: female.value
                    }
                ),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            // Step 2. Convert response to json
            .then((response)=>response.json())

            // Step 3. Handle the json data
            .then(json=>{
                console.log('response from amingo', json)
                setState({ ...state, registrationSuccess: true, errors: []})
                setGlobalState({ ...globalState, registrationSuccess: true, errors: []})
            });
        }
    }
 

    return (
        <div className="content-wrapper">
        <div className="row  no-gutters">
            <div className="col-lg-6 hidden-md-down">
                <div className="bg-stretch img-wrap">
                    <img src="img/profile.png" alt="images"/>
                </div>
            </div>
            <div className="col-lg-6 signup-block">
                <div className="signup-wrap text-center">
                    <div className="inner-wrap">
                     
                        <div action="#" method="post" id="contact_form" className="waituk_contact-form signup-form">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                          
                            <h5>Create Your Profile</h5>
                            
                            
                            <div className="row">
                                
                            
                            <div className="col-md-6">
                            
                                            <div className="form-group">
                                                                                        <label>
                                                                                        <img src="img/male.png"/>
                                                                                        <br/>
                                            <input ref={(elem)=>male = elem} type="radio" name="test" value="small" checked/> <h5>Male</h5>
                                            
                                            </label>
                                                <input ref={(elem)=>firstname = elem} type="text" placeholder="FIRST NAME *" id="con_fname" name="con_fname" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                            <label>
                                                                                        <img src="img/female.png"/>
                                                                                        <br/>
                                            <input ref={(elem)=>female = elem} type="radio" name="test" value="small" checked/> <h5>Female</h5>
                                            
                                            </label>
                                                <input ref={(elem)=>lastname = elem} type="text" placeholder="LAST NAME *" id="con_lname" name="con_lname" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input ref={(elem)=>phone = elem} type="tel" placeholder="PHONE NUMBER *" id="con_phone" name="con_phone" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input ref={(elem)=>email = elem} type="email" placeholder="EMAIL ADDRESS *" id="con_email" name="con_email" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea ref={(elem)=>message = elem} className="form-control" placeholder="YOUR BIO *" id="con_message" name="con_message" rows="2"></textarea>
                                    </div>
                                    <div className="btn-container">
                                        <button onClick={sendInfo} id="btn_sent" className="btn btn-primary btn-arrow">Update Profile</button>

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
                <div 
                    className="alert alert-success" 
                    role="alert" 
                >
                    Your profile was updated successfully!
                </div>
            }

                            </div>
                            <br/>
                            <p>Get to know more about us visit -> <Link to="/">Home Page</Link></p>
                            
               
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

  export default Profile;