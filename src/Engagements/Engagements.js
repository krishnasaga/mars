import React from 'react'
import EngagementsList from './EngagementsList.js'
import image from './london-bridge-oasis.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Engagements extends React.Component {
  render(){
    return (
	  <div>
	    <EngagementsList list={ this.props.engagements } />
	      <ReactCSSTransitionGroup
	        transitionName="cardexpand"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
	      >
	       { this.props.children }
	      </ReactCSSTransitionGroup>
	    </div>
	);
  }
}
