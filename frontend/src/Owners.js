import React from 'react';


const Owners = (prop) => {

 

    return (
        <section className="content-block">
        <div className="container">
            <div className="block-heading bottom-space">
                <h3 className="block-top-heading">THE PILLARS OF</h3>
                <h2 className="block-main-heading">PACT EMPLOYMENT SERVICES</h2>
                <span className="block-sub-heading">We believe in hiring the right person for the right job. At the end of the day, you bet on them and not on strategies you have in place.</span>
                <div className="divider"><img src="img/divider.png" alt="images description"/></div>
            </div>
            <div className="team-container">
                <div className="owl-carousel group-slide bottom-m-space">
                    <div className="slide-item">
                        <figure className="team-box caption-fade-up">
                            <div className="img-block rev-gray-scale">
                                <img src="img/team-02.jpg" alt="images description"/> 
                            </div>
                            <figcaption className="text-right">
                                <strong className="content-title mb-0">ASHOK KALYANPUR</strong>
                                <span className="sub">FOUNDER AND GROUP CEO</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="slide-item">
                        <figure className="team-box caption-fade-up">
                            <div className="img-block rev-gray-scale">
                                <img src="img/team-01.jpg" alt="images description"/> 
                            </div>
                            <figcaption className="text-right">
                                <strong className="content-title mb-0">MINAL KALYANPUR</strong>
                                <span className="sub">DIRECTOR</span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="slide-item">
                        <figure className="team-box caption-fade-up">
                            <div className="img-block rev-gray-scale">
                                <img src="img/team-03.jpg" alt="images description"/>
                            </div>
                            <figcaption className="text-right">
                                <strong className="content-title mb-0">TARUN ARORA</strong>
                                <span className="sub">MANAGING DIRECTOR</span>
                            </figcaption>
                        </figure>
                    </div>
                  
                </div>
              
            </div>
        </div>
    </section>
    )
  }

  export default Owners;