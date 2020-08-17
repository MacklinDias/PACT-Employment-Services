import React from 'react';
import { Link } from 'react-router-dom';

const Header = (prop) => {

 

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
                    <Link className="navbar-brand mr-auto m-sm-auto" to = "/"> <img src="img/Pactw.png" alt="PACT"/>  <img src="img/Pact.png" alt="PACT"/> </Link>
                    <div className="collapse navbar-collapse flex-row-reverse" id="mega-menu">
                        <ul className="nav navbar-nav">

                            <li>
                                <Link to="/about" className="hov">What We Do</Link>
                            </li>
                          
                            <li>
                                <Link to="/outsourcing" className="hov">Manpower Outsourcing</Link>
                            </li>
        
                            <li>
                                <Link to="/jobs" className="hov">Current Openings</Link>
                            </li>
                          
                            <li>
                                <Link to="/contact" className="hov">Contact</Link>
                            </li>

                           
                            <li>
                                <Link to="/login" className="hov">Login</Link>
                            </li>

                            
                        </ul>
                    </div>
                 
                    
                </nav>
            </div>
        </div>
    </header>
    )
  }


export default Header;