import React from 'react';

export default class extends React.Component {
  render() {
    return (
        <div className="dathm-footer">
            <footer>
                <div className="row">
                    <div  className="col-md-12">
                        <div className="footer-social">
                            <ul className="social-links">
                                <li className="social-link-item facebook font-icon icon-medium">
                                    <a href="https://www.facebook.com/minhdat.001" target="_blank"><i className="fa fa-facebook"></i>  </a>
                                </li>
                                <li className="social-link-item twitter font-icon icon-medium">
                                    <a href="https://twitter.com/?lang=vi" target="_blank"><i className="fa fa-twitter"></i>  </a>
                                </li>
                                <li className="social-link-item google font-icon icon-medium">
                                    <a href="https://plus.google.com/u/1/108224163642553600677" target="_blank"><i className="fa fa-google-plus"></i>  </a>
                                </li>
                                <li className="social-link-item youtube font-icon icon-medium">
                                    <a href="https://www.youtube.com/channel/UC38wpzZNeQkbatGaV7ZsX1Q" target="_blank"><i className="fa fa-youtube"></i>  </a>
                                </li>
                                <li className="social-link-item instagram font-icon icon-medium">
                                    <a href="https://www.instagram.com/ha.m.dat_z.a.o_/" target="_blank"><i className="fa fa-instagram"></i>  </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-licence">
                            <p>Copyright &copy; My Website 2017</p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
  }
}
