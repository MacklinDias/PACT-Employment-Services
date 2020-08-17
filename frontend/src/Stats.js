import React from 'react';


const Stats = (prop) => {

 

    return (
        <section className="content-block count-block text-center p-0 parallax" data-stellar-background-ratio="0.55">
        <div className="container-fluid">
            <div className="row no-gutters">
                <div className="col-sm-6 col-lg-3">
                    <div className="col-wrap">
                        <div className="icon">
                            <span className="custom-icon-projects"></span>
                        </div>
                        <h3 className="number">505</h3>
                        <div className="text text-uppercase">TOTAL PROJECTS</div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="col-wrap">
                        <div className="icon">
                            <span className="custom-icon-smile"></span>
                        </div>
                        <h3 className="number">220</h3>
                        <div className="text text-uppercase">SATISFIED CLIENTS</div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="col-wrap">
                        <div className="icon">
                            <span className="custom-icon-award"></span>
                        </div>
                        <h3 className="number">720</h3>
                        <div className="text text-uppercase">AWARDS WON</div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="col-wrap">
                        <div className="icon">
                            <span className="custom-icon-celebrate"></span>
                        </div>
                        <h3 className="number">707</h3>
                        <div className="text text-uppercase">MILESTONES MET</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    )
  }

  export default Stats;