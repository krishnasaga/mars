import React from 'react'
import Engagement from './Engagement.js'
import Notification from 'Cards/Notification'
import Deal from 'Cards/Deal'
import LatestDeals from 'Engagements/LatestDeals/LatestDeals'
import SearchCard from 'SearchResults/SearchCard'
export default class EngagementsList extends React.Component {
  constructor(props){
    super(props);
    this.cardMap = {
      'NOTIFICATION': Notification,
      'ENGAGEMENT': Engagement,
      'DEAL': Deal,
      'LATEST_DEALS': LatestDeals,
      'SEARCH': SearchCard
    }
  }

  render(){
    return (
	  <div className="mdl-grid">{ this.props.list ? this.props.list.map(  ( engagement , index ) => {
	        let Card = this.cardMap[engagement.type] || Engagement;
	        return <Card title={ engagement.title } image={ engagement.image } key={ index } />;
	     } )
	      : <Link to="/hello" >Empty list</Link> }
	  </div>
	);
  }
}
