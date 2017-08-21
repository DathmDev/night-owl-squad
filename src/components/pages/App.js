import React from 'react';

import '.././common/css/default.css'
import '.././common/css/responsive.css'

import Header from '../layout/Header'
import About from '../layout/About'
import Service from '../layout/Service'
import Gallery from '../layout/Gallery'
import Contact from '../layout/Contact'
import Footer from '../layout/Footer'
import ScrollToTop from '../layout/ScrollToTop'

export default class extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let myNav = window.document.getElementById('nav')
    if(window.scrollY >= 500) {
      myNav.className += ' scroll'
    } else {
      myNav.classList.remove('scroll')
    }
  }

  render() {
    return (
        <div className="App">
            <Header />
            <About />
            <Service />
            <Gallery />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
  }
}
