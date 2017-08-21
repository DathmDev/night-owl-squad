import React from 'react';
import { animate } from '../common/common'

export default class extends React.Component {

  handleScrollTop() {
    animate({
        duration: 1000,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: (progress) => {
          window.scrollTo(window.scrollX, window.scrollY - window.scrollY*progress)
        }
      });
  }

  render() {
    return (
        <ul className="nav pull-right scroll-top">
            <li><a href="javascript:void(0)" title="Scroll to top" onClick={this.handleScrollTop}><i className="glyphicon glyphicon-chevron-up"></i></a></li>
        </ul>
    )
  }
}
