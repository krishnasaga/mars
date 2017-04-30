import React from 'react'
import { Link } from 'react-router'
import arrowImage from 'assets/ic_arrow_back_black_36dp.png';
import flightDelay from './flight_delay.jpg'
import flightTakeoff from './flight_takeoff.png';
import flightLand from './flight_land.png'

import  './flight_delay.scss'

export default class NotificationView extends React.Component {

  render(){
    return (
      <div className="mdl-card view-card flight-delay-card" >
         <div className="mdl-card__title"
           style={{
             backgroundImage: 'url( ' + flightDelay + ' )',
             height: '150px',
             backgroundSize: '100%',
           }}
         >
           <Link to="/" ><img src={ arrowImage } /></Link>
         </div>
        <div className="mdl-card__supporting-text mdl-card--border terminal-nfo">
           <h4>Air India Flight AI 222</h4>
        </div>
        <div className="mdl-card__supporting-text mdl-card--border terminal-nfo">
          <h4> <img src={ flightTakeoff } />  India </h4>
          <h5>Departure <s>02:00 AM</s> 02:00 AM</h5>
        </div>
        <div className="mdl-card__supporting-text mdl-card--border terminal-nfo">
          <h4> <img src={ flightLand } /> San Francisco </h4>
          <h5>Arrival <s>09:00 PM</s> 11:00 PM </h5>
        </div>
      </div>
    );
  }
}
