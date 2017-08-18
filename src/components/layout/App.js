import React from 'react';

import Header from './Header'
import About from './About'
import Service from './Service'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'



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
