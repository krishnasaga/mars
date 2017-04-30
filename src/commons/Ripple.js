import React from 'react'
var load = require("bundle-loader?lazy!react-ink");

export default class Ripple extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Ripple: null
    }
  }

  componentDidMount(){
    var self = this;
    load( (Ink) => {
      self.setState({
        Ripple: <Ink
          opacity={ 0.05 }
          duration={ 500 }
        ></Ink>
      });
    });
  }

  render(){
    return <span> { this.state.Ripple } </span>;
  }

}
