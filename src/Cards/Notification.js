import React from 'react'
import { browserHistory, Link } from 'react-router';
import Ripple from 'commons/Ripple'
import image from 'assets/flight_delay.png'

export default class Notification extends React.Component {

  render(){
    return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
             <div className="mdl-card engagement-card notification-card" role="button"  >
               <Link to="notification/4444" style={{
                 color: 'inherit',
                 textDecoration: 'none'
               }} >
               <Ripple></Ripple>
               <div className="mdl-card__title">
                 <div>
                   <span className="mdl-typography--subhead" > Notification </span>
                   <h3>{ this.props.title }</h3>
                 </div>
                 <div className="image" ><img src={ image } alt="London" /></div>
               </div>
               <p className="mdl-card__supporting-text" >
                 Your flight AI 111 Will be departure at 04:00 AM today
               </p>
               </Link>
               </div>
            </div>
            );
  }

}
