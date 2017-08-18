import React from 'react';

export default class extends React.Component {
  render() {
    return (
        <div className="Contact">
            <div className="dathm-contact" id="dathm-contact">
                <div className="container">
                    <div className="row headding">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="line"></div>
                            <div className="text-headding"><span><a>Contact</a></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dathm-contact-cover">
                <div className="clearfix">
                    <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 text-center">
                        <div className="distance"></div>

                        <div className="contact-row">
                            <div className="row-up">
                                <h2>Contact Us</h2>
                            </div>
                            <div className="row-down">
                                <div className="module-icon-item">
                                    <i className="default fa fa-map-o"></i>
                                    <span>HCMC, VietNam.</span>
                                </div>
                                <div className="module-icon-item">
                                    <i className="green fa fa-envelope-o"></i>
                                    <span>1312120@student.hcmus.edu.vn</span>
                                </div>
                                <div className="module-icon-item">
                                    <i className="orange fa fa-phone-square"></i>
                                    <span>098-352-23-69</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
