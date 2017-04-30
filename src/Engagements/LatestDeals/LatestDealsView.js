import React from 'react'
import { Link } from 'react-router'
import arrowImage from 'assets/ic_arrow_back_black_36dp.png';
import  'Notifications/flight_delay.scss'

export default class LatestDealsView extends React.Component {

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
        <div className="mdl-card__supporting-text mdl-card--border terminal-nfo">
           Deal
        </div>
        <div className="mdl-card__supporting-text mdl-card--border terminal-nfo">
          Deal
        </div>
        <div className="mdl-card__supporting-text mdl-card--border terminal-nfo">
           Deal
        </div>
        </div>
      </div>
    );
  }
}
