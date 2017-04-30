import React from 'react'
import { Link } from 'react-router'
import arrowImage from 'assets/ic_arrow_back_black_36dp.png';

export default class EngagementView extends React.Component {

  render(){
    return (
      <div className="mdl-card" style={{
        position: 'fixed',
        left: 0,
        top: '56px',
        width: '100%',
        height: document.documentElement.clientHeight - 56 + 'px'
      }}>
        <div className="mdl-card__title">
           <Link to="/" ><img src={ arrowImage } /></Link>
        </div>
        <div className="mdl-card__supporting-text">
        The Sky Tower is an observation and telecommunications tower located in Auckland,
        New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure
        in the Southern Hemisphere.
        </div>
        <div className="mdl-card__actions">
           <a href="#">Wikipedia entry</a>
        </div>
      </div>
    );
  }
}
