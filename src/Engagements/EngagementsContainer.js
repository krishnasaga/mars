import { connect } from 'react-redux'
import Engagements from './Engagements'
import Actions from './actions/actions.js'
import React from 'react'

const mapStateToProps = (state,ownProps) => {
  let deals = state.deals || {};
  return {
    engagements: deals.data || []
  };
}

const mapDispatchToProps = (dispatch) => {
  dispatch(Actions.loadDeals);
  return { };
}

const EngagementsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Engagements)

export default EngagementsContainer
