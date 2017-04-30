import React from 'react'
import Engagement from './Engagement.js'

export default class EngagementsList extends React.Component {
  constructor(props){
    super(props);
    this.cardMap = {
      'ENGAGEMENT': Engagement
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
