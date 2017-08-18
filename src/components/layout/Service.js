import React from 'react';

export default class extends React.Component {
  render() {
    return (
        <div className="dathm-services" id="dathm-services">
            <div className="container">
                <div className="row headding">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="line"></div>
                        <div className="services-headding"><span><a>Services</a></span></div>

                    </div>
                </div>
                <div className="dathm-group">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="service-logo text-center">
                                <a href="#" ><span className="fa fa-youtube-play"></span></a>
                            </div>

                            <div className="caption text-center">
                                <h3 className="text-center"><a href="#">youtube</a></h3>
                                <p>YouTube is an American video-sharing website headquartered in San Bruno, California. The service was created by three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—in February 2005.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="service-logo text-center">
                                <a href="#" ><span className="fa fa-facebook-official"></span></a>
                            </div>

                            <div className="caption text-center">
                                <h3 className="text-center"><a href="#">facebook</a></h3>
                                <p>Facebook (FB) is an American for-profit corporation and online social media and social networking service based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="service-logo text-center">
                                <a href="#" ><span className="fa fa-google-plus-square"></span></a>
                            </div>

                            <div className="caption text-center">
                                <h3 className="text-center"><a href="#">google +</a></h3>
                                <p>Google+ (pronounced and sometimes written as Google Plus) is an interest-based social network that is owned and operated by Google.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
