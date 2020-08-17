import React from 'react';


const About = (prop) => {

 

    return (
        <main>
        <section className="visual">
            <div className="visual-inner aboutus-banner dark-overlay parallax" data-stellar-background-ratio="0.55">
                <div className="centered">
                    <div className="container">
                        <div className="visual-text visual-center">
                            <h1 className="visual-title visual-sub-title">About Pact</h1>
                            <div className="breadcrumb-block">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"> Home </a></li>
                                    <li className="breadcrumb-item active"> What we do? </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <div className="content-wrapper">   
            <section className="content-block">
                <div className="container text-center">
                    <div className="heading bottom-space">
                        <h2>Right <span>Person.</span> Right <span>Place.</span> </h2>
                    </div>
                    <div className="description">
                        <p>Whether you are a company looking to recruit the right people to meet your needs or a candidate looking for a job that rewards your skills; Pact is your go to place.</p>
                    </div>
                </div>
            </section>
            <section className="content-block p-0">
                <div className="container-fluid">
                    <div className="content-slot alternate-block">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bg-stretch img-wrap wow slideInLeft">
                                    <img src="img/pact-about.jpg" alt="images"/>
                                </div>
                            </div>
                            <div className="col col-lg-6">
                                <div className="text-wrap justifytext">
                                    <h3>We help you achieve your vision!</h3>
                                    <p>Pact is an acknowledged leader in Middle East's recruitment industry. Trusted by top banks, financial institutions and multinational companies for all their recruitment needs, we offer a range of top notch recruitment services that connect top quality candidates with a looking to fill key positions in their organizations every day. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bg-stretch img-wrap wow slideInRight">
                                    <img src="img/pact-about2.jpg" alt="images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-wrap justifytext">
                                    <h3>Benefits with Pact</h3>
                                    <p>We at Pact offer many years of experience along with professional services for both employers and job seekers. Backed by a strong reputation for placing high quality candidates in both temporary and contract positions we work along with our clients not only to meet but to exceed their expectations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bg-stretch img-wrap wow slideInLeft">
                                    <img src="img/pact-about1.jpg" alt="images"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-wrap justifytext">     
                                    <h3>Pact your first choice</h3>
                                    <p>Pact has grown to be a recruiter of choice, to companies across various industries in UAE and India. The company’s major strength is in servicing the banking sector with regard to human resource requirements. Pact offers professional services for both employers and job seekers. Over the years, Pact has built a strong reputation for placing high quality candidates in permanent, temporary and contract positions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <aside className="content-block">
                <div className="container">
                    <div className="logo-container">
                            <h3 className="block-top-heading">Our clients</h3>
                            <hr/>
                        <div className="owl-carousel logo-slide" id="waituk-owl-slide-4">
                            <div className="slide-item">
                                <img src="img/logo-01.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/logo-02.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/logo-03.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/logo-04.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/adcb.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/enbd.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/transmed.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/maf.png" alt="images description"/>
                            </div>
                            <div className="slide-item">
                                <img src="img/hsbc.png" alt="images description"/>
                            </div>
                             <div className="slide-item">
                                <img src="img/spri.png" alt="images description"/>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
 
    </main>
    )
  }

  export default About;