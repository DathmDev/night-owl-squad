import React from 'react';

export default class extends React.Component {
  render() {
    return (
        <div className="dathm-about" id="dathm-about">
            <div className="container">
                <div className="row headding">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="line"></div>
                        <div className="text-headding"><span><a>About</a></span></div>
                        <h2 className="text-center">Welcome to our website</h2>
                        <p className="text-center">Meet Our Members - Night Owls Squad</p>
                    </div>
                </div>
                <div className="dathm-group">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-6 realab-item">
                            <div className="dathm-image text-center">
                                <a href="members/1312120/1312120.html">
                                    <img src={require('../common/images/dathm-img.jpg')} alt="img-responsive" className="img-circle" />
                                </a>
                            </div>

                            <div className="dathm-name text-center"><a href="members/1312120/1312120.html">Ha Minh Dat</a></div>
                            <p className="text-center">Web Designer</p>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 realab-item">
                            <div className="dathm-image text-center">
                                <a href="members/1312120/1312120.html">
                                    <img src={require('../common/images/dathm-img.jpg')} alt="img-responsive" className="img-circle" />
                                </a>
                            </div>

                            <div className="dathm-name text-center"><a href="members/1312120/1312120.html">Ha Minh Dat</a></div>
                            <p className="text-center">Support</p>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 realab-item">
                            <div className="dathm-image text-center">
                                <a href="members/1312120/1312120.html">
                                    <img src={require('../common/images/dathm-img.jpg')} alt="img-responsive" className="img-circle" />
                                </a>
                            </div>

                            <div className="dathm-name text-center"><a href="members/1312120/1312120.html">Ha Minh Dat</a></div>
                            <p className="text-center">Boss</p>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 realab-item">
                            <div className="dathm-image text-center">
                                <a href="members/1312120/1312120.html">
                                    <img src={require('../common/images/dathm-img.jpg')} alt="img-responsive" className="img-circle" />
                                </a>
                            </div>

                            <div className="dathm-name text-center"><a href="members/1312120/1312120.html">Ha Minh Dat</a></div>
                            <p className="text-center">Fixer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
