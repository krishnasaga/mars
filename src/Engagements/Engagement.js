import React from 'react'
import { Link } from 'react-router'

export default class Engagement extends React.Component {
  render(){
    return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
             <div className="mdl-card engagement-card " >
               <div className="mdl-card__title">
                 <div>
                   <span className="mdl-typography--subhead" >Travel</span>
                   <h3>{ this.props.title }</h3>
                 </div>
                 <div className="image" ><img src={ this.props.image } alt="London" /></div>
               </div>
               <p className="mdl-card__supporting-text" >
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Nulla malesuada faucibus mauris, quis finibus metus mollis vitae.
               </p>
               </div>
           </div>);
  }
}
