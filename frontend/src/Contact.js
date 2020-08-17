import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const Contact = (prop) => {

    let firstname, lastname, email, message, phone;

    const [state, setState] = useState(
        {
            errors: [],
            registrationSuccess: false
        }
    )

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
            errors.push('Please enter a message between 30 to 160 characters')
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
            fetch('http://localhost:3000/contact', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        firstname: firstname.value,
                        lastname: lastname.value,
                        email: email.value,
                        message: message.value,
                        phone: phone.value
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
            });
        }
    }

    return (
   

    
        <main>
       
       <section className="visual">
            <div className="visual-inner contact-banner dark-overlay parallax" data-stellar-background-ratio="0.55">
                <div className="centered">
                    <div className="container">
                        <div className="visual-text visual-center">
                            <h1 className="visual-title visual-sub-title">Contact Us</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <div className="content-wrapper">
            <section className="content-block pb-0">
                <div className="container">
                    <div className="contact-container">
                        <h6 className="content-title contact-title">GET IN TOUCH WITH US</h6>
                        <div className="row">
                            <div className="col-lg-6">
                               
                                <div action="#" method="post" id="contact_form" className="waituk_contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input ref={(elem)=>firstname = elem} type="text" placeholder="FIRST NAME *" id="con_fname" name="con_fname" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
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
                                        <textarea ref={(elem)=>message = elem} className="form-control" placeholder="MESSAGE *" id="con_message" name="con_message"></textarea>
                                    </div>
                                    <div className="btn-container">
                                        <button onClick={sendInfo} id="btn_sent" className="btn btn-primary btn-arrow">SEND MESSAGE</button>

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
                    Your message was sent successfully!
                </div>
            }
                                   
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1">
                                <div className="info-slot">
                                    <div className="icon"><span className="custom-icon-map-marker"></span></div>
                                    <div className="text">
                                        <address>209, Carrera Building,
                                            Al Karama, Dubai,   
                                            United Arab Emirates</address>
                                    </div>
                                </div>
                                <div className="info-slot">
                                    <div className="icon"><span className="custom-icon-headset"></span></div>
                                    <div className="text">
                                        <ul className="content-list contact-list">
                                            <li><span className="label-text">White-collar</span> &nbsp; &nbsp; &nbsp; <a href="tel:+971-47047106">+971-47047106</a></li>
                                            <li><span className="label-text">BLUE-COLLAR</span> &nbsp; &nbsp; &nbsp; <a href="tel:+971-47047155">+971-47047155</a></li>
                                            <li><span className="label-text">GENERAL</span> &nbsp; &nbsp; &nbsp; <a href="tel:+971-47047111">+971-47047111</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="info-slot">
                                    <div className="icon"><span className="custom-icon-message"></span></div>
                                    <div className="text">
                                        <ul className="content-list contact-list">
                                            <li><a href="mailto:info@pactemployment.ae">info@pactemployment.ae</a></li>
                                            <li><a href="mailto:manpower@pactemployment.ae">manpower@pactemployment.ae</a></li>
                                            <li><a href="mailto:verification@pactemployment.ae">verification@pactemployment.ae</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <div className="map-holder embed-responsive embed-responsive-21by9">
                            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.2529894627446!2d55.303824829170374!3d25.236522212096226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d0141cce13%3A0x33e198933867c329!2sPact%20Employment%20Services!5e0!3m2!1sen!2sae!4v1569562997582!5m2!1sen!2sae" width="600" height="450" style={{"border":"0"}}></iframe>
                        </div>
        
        </div>
      
    </main>
    )
  }

  export default Contact;