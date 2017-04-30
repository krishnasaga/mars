import React from 'react'
var load = require("bundle-loader?lazy!react-ink");

export default RippleCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Ripple: null
    }
  }

  componentDidMount(){
    var self = this;
    load(function(Ripple) {
      self.setState({
        Ripple: <Ripple></Ripple>
      });
    }
  }

  render(){
    return { this.state.Ripple };
  }

}