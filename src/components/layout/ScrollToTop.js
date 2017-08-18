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
