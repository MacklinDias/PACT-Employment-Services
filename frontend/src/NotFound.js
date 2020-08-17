import React from 'react';


const NotFound = (prop) => {

 

    return (
    <               div class="content-wrapper">
                        <div class="row no-gutters">
                            <div class="col-lg-6 hidden-md-down">
                                <div class="bg-stretch img-wrap">
                                    <img src="img/notfound.png" alt="images"/>
                                </div>
                            </div>
                            <div class="col-lg-6 signup-block">
                                <div class="signup-wrap text-center">
                                    <div class="inner-wrap">
                                        <div class="circular-icon bottom-space"><i class="icon-bug"></i></div>
                                        <div action="#" method="post" id="contact_form" class="waituk_contact-form signup-form">
                                            <h4>The page you requested has mysteriously disappeared</h4>
                                            <p><big>You can find it's remains within the links in the menu</big></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
  }

  export default NotFound;