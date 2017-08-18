import React from 'react';

export default class extends React.Component {
  render() {
    return (
        <div className="dathm-gallery" id="dathm-gallery">
            <div className="container">
                <div className="row headding">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="line"></div>
                        <div className="text-headding"><span><a>Gallery</a></span></div>
                    </div>
                </div>
                <div className="dathm-group">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12 lookbook-item-home wrap-realab-lookbook">
                            <div className="realab-lb-img">
                                <a href="#"><img src={require('../common/images/gallery/picture1.jpg')} alt="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 lookbook-item-home wrap-realab-lookbook">
                            <div className="realab-lb-img">
                                <a href="#"><img src={require('../common/images/gallery/picture2.jpg')} alt="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 lookbook-item-home wrap-realab-lookbook">
                            <div className="realab-lb-img">
                                <a href="#"><img src={require('../common/images/gallery/picture3.jpg')} alt="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 lookbook-item-home wrap-realab-lookbook">
                            <div className="realab-lb-img">
                                <a href="#"><img src={require('../common/images/gallery/picture4.jpg')} alt="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 lookbook-item-home wrap-realab-lookbook">
                            <div className="realab-lb-img">
                                <a href="#"><img src={require('../common/images/gallery/picture5.jpg')} alt="img-responsive" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 lookbook-item-home wrap-realab-lookbook">
                            <div className="realab-lb-img">
                                <a href="#"><img src={require('../common/images/gallery/picture6.jpg')} alt="img-responsive" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
