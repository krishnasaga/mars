import { connect } from 'react-redux'
import LatestDealsView from './LatestDealsView'
import React from 'react'

const mapStateToProps = (state,ownProps) => {

  return {


  };
}

const mapDispatchToProps = (dispatch) => {

  return { };
}

const LatestDealsViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestDealsView)

export default LatestDealsViewContainer
