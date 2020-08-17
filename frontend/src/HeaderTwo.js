import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTwo = (prop) => {

 

    return (
        <header className="fixed-top main-header header-white transparent with-side-panel-ico" id="waituk-main-header">
        <div id="nav-section">
            <div className="bottom-header container-fluid mega-menus" id="mega-menus">
                <nav className="navbar navbar-toggleable-md no-border-radius no-margin mega-menu-multiple" id="navbar-inner-container">
                    <div action="mega-menu-5.html" id="top-search" className="no-margin top-search">
                        <div className="form-group no-margin">
                            <input className="form-control no-border" id="search_term" name="search_term" placeholder="Type & Press Enter" type="text"/>
                        </div>
                    </div>
                    <button type="button" className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#mega-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand mr-auto m-sm-auto" to = "/"> <img src="img/Pact.png" alt="PACT"/>  <img src="img/Pact.png" alt="PACT"/> </Link>
                    <div className="collapse navbar-collapse flex-row-reverse" id="mega-menu">
                       
                        <ul className="navbar-nav" >
                           
                            <li> 
                                <Link  className="black" to="/about">What We Do</Link>
                            </li>
                          
                            <li>
                                <Link className="black" to="/outsourcing">Manpower Outsourcing</Link>
                            </li>
        
                            <li>
                                <Link className="black" to="/jobs">Current Openings</Link>
                            </li>
                          
                            <li>
                                <Link className="black" to="/contact">Contact</Link>
                            </li>

                           
                            <li>
                                <Link className="black" to="/login">Login</Link>
                            </li>                         
                        </ul>
                      
                    </div>
                 
                    
                </nav>
            </div>
        </div>
    </header>
    )
  }


export default HeaderTwo;