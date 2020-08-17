import React from 'react';


const Testimonials = (prop) => {

 

    return (
        <section className="content-block bg-gray-light">
                        <div className="container">
                            <div className="block-heading bottom-space text-center">
                                <h3 className="block-top-heading">CLIENT</h3>
                                <h2 className="block-main-heading">TESTIMONIALS</h2>
                                <span className="block-sub-heading">We strive to provide excellent service</span>
                                <div className="divider"><img src="img/divider.png" alt="images description"/></div>
                            </div>
                            <div className="testimonial-container text-center">
                                <div className="owl-carousel testimonial-slide" id="waituk-owl-slide-3">
                                    <div className="slide-item">
                                        <div className="team-wrap">
                                            <div className="img-block">
                                                <img src="img/people-01.jpg" alt="images description"/>
                                            </div>
                                            <div className="text-wrap">
                                                <h2>John Doe</h2>
                                                <span className="designation bottom-m-space">ADCB Bank - Recruitment Manager</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="team-wrap">
                                            <div className="img-block">
                                                <img src="img/people-02.jpg" alt="images description"/> 
                                            </div>
                                            <div className="text-wrap">
                                                <h2>Jason Doe</h2>
                                                <span className="designation bottom-m-space">ENBD - Outsourcing Head</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="team-wrap">
                                            <div className="img-block">
                                                <img src="img/people-03.jpg" alt="images description"/> 
                                            </div>
                                            <div className="text-wrap">
                                                <h2>Jake Grahm</h2>
                                                <span className="designation bottom-m-space">Majid Al Futtaim - HR Manager</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-item">
                                        <div className="team-wrap">
                                            <div className="img-block">
                                                <img src="img/people-02.jpg" alt="images description"/> 
                                            </div>
                                            <div className="text-wrap">
                                                <h2>Natalie Fullick</h2>
                                                <span className="designation bottom-m-space">SPRII - CEO</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
      
    )
  }

  export default Testimonials;