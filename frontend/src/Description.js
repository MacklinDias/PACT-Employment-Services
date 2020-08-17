import React from 'react';


const Description = (prop) => {

 

    return (
        <section className="content-block pt-0">
        <div className="container">
            <div className="block-heading bottom-space">
               <br></br> <br></br>
                <h3 className="block-top-heading">THE LIFE SIZE</h3>
                <h2 className="block-main-heading">BRAND STORY</h2>
                <span className="block-sub-heading">View multiple content block layouts under features section.</span>
                <div className="divider"><img src="img/divider.png" alt="images description"/></div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="bottom-space-small-only justifytext">
                        <p>Pact is an acknowledged leader in Middle East's recruitment industry. Trusted by top banks, financial institutions and multinational companies for all their recruitment needs, we offer a range of top notch recruitment services that connect top quality candidates with clients looking to fill key positions in their organizations every day.</p>
                        <p>Backed by a strong reputation for placing high quality candidates in both temporary and contract positions we work along with our clients not only to meet but to exceed their expectations</p><div className="btn-container top-m-space">
                            <a href="#" className="btn btn-black has-radius-small">VIEW PROJECTS</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bottom-s-space justifytext">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="content-links">
                                <li><a href="#">WEB & INTERACTIVE DESIGN</a></li>
                                <li><a href="#">CONTENT MANAGEMENT</a></li>
                                <li><a href="#">WEB APPLICATIONS</a></li>
                                <li><a href="#">SOFTWARE DEVELOPMENT</a></li>
                                <li><a href="#">ECOMMERCE SOLUTIONS</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul className="content-links">
                                <li><a href="#">DATABASE DESIGN</a></li>
                                <li><a href="#">TECHNICAL DOCUMENTATION</a></li>
                                <li><a href="#">SOFTWARE ARCHITECTURE</a></li>
                                <li><a href="#">SEARCH OPTIMIZATION</a></li>
                                <li><a href="#">WEB PROMOTIONS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    )
  }

  export default Description;