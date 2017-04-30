import React from 'react'

export default class Book extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
           style: {
             transition: '0.2s all'
           }
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
       style: {
      position: 'absolute',
      top: 0,
      zIndex: 500,
      height: window.screen.availHeight + 'px',
      width: '100%',
      left: 0
       }
    });
  }

  render(){
    return (

    <div className="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone">
<div className="demo-card-square mdl-card mdl-shadow--2dp" style={this.state.style} >
  <div className="mdl-card__title mdl-card--expand" style={{
    background: 'url(' + this.props.image + ')',
    backgroundSize: '100%'
  }} >
    <h2 className="mdl-card__title-text"> { this.props.name } </h2>
  </div>
  <div className="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </div>
  <div className="mdl-card__actions mdl-card--border">
    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      View Updates
    </a>
  </div>
</div>
</div>
	);
  }
}
