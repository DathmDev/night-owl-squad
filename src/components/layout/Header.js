import React from 'react';

const animate = ({duration, draw, timing}) => {
  let start = performance.now()
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1
    let progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  });
}

export default class extends React.Component {
  handleClick(event){
    let link = event.target.getAttribute('href')
    let posi = window.document.getElementById(link.slice(1, link.length)).offsetTop - 100;
    // console.log(posi)
    animate({
        duration: 700,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: (progress) => {
          window.scrollTo(window.scrollX, posi*progress)
        }
      });
  }

  render() {
    return (
      <div className="bgimg">
        <nav className="dathm-navbar navbar navbar-inverse navbar-fixed-top" id="nav">
            <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#"><span className="fa fa-home"></span> LOGO</a>
                  <a className="navbar-brand" href="https://www.facebook.com/minhdat.001"><span className="fa fa-facebook"></span></a>
                  <a className="navbar-brand" href="https://twitter.com/?lang=vi"><span className="fa fa-twitter"></span></a>
                  <a className="navbar-brand" href="https://plus.google.com/u/1/108224163642553600677"><span className="fa fa-google-plus"></span></a>
                  <a className="navbar-brand" href="https://www.youtube.com/channel/UC38wpzZNeQkbatGaV7ZsX1Q"><span className="fa fa-youtube"></span></a>
                  <a className="navbar-brand" href="https://www.instagram.com/ha.m.dat_z.a.o_/"><span className="fa fa-instagram"></span></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <form className="navbar-form navbar-right">
                    <div className="inline search form-group">
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <a className="inline" href="javascript:void(0)"><i className="dathm-form-search fa fa-search"></i></a>
                  </form>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#dathm-about" onClick={this.handleClick}>About</a></li>
                    <li><a href="#dathm-services" onClick={this.handleClick}>Services</a></li>
                    <li><a href="#dathm-gallery" onClick={this.handleClick}>Gallery</a></li>
                    <li><a href="#dathm-contact" onClick={this.handleClick}>Contact</a></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}
