import React from 'react'

export default class SearchCard extends React.Component {

  render(){
    return (<div className="mdl-cell mdl-cell--12-phone mdl-shadow--2dp" draggable="true" >
             <div className="mdl-card engagement-card notification-card" role="button"  >
               <div className="mdl-card__title">
                 <h4>Latest Search Results</h4>
               </div>
               <p className="mdl-card__supporting-text" >
                 <a href="#" >Summer deals</a>
               </p>

               <p className="mdl-card__supporting-text" >
                 <a href="#" >Flights to New York</a>
               </p>

               <p className="mdl-card__supporting-text" >
                 <a href="#" >Fly to New York</a>
               </p>

               <p className="mdl-card__supporting-text" >
                 <a href="#" >Summer Late Deals</a>
               </p>
               </div>
            </div>
            );
  }

}
