import React from 'react';


const Clients = (prop) => {

 

    return (
        <aside className="content-block">
        <div className="container">
            <div className="logo-container">
              
                <h3 className="block-top-heading">Our clients</h3>
                <hr/>
                <div className="owl-carousel logo-slide" id="waituk-owl-slide-4">
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
    )
  }

  export default Clients;