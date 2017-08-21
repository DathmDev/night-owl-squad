import React from 'react';

import '.././common/css/custom-member.css'
import '.././common/css/responsive-member.css'

import NavPortfolio from '../layout/NavPortfolio'
import ContainerPortfolio from '../layout/ContainerPortfolio'
import Footer from '../layout/Footer'
import ScrollToTop from '../layout/ScrollToTop'

export default class extends React.Component {
  render() {
    return (
        <div className="MyPortfolio">
            <NavPortfolio />
            <ContainerPortfolio />
            <Footer />
            <ScrollToTop />
        </div>
    );
  }
}
