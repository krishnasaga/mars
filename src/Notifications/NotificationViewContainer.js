import { connect } from 'react-redux'
import NotificationView from './NotificationView'
import React from 'react'

const mapStateToProps = (state,ownProps) => {

  return {

  };
}

const mapDispatchToProps = (dispatch) => {

  return { };
}

const NotificationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationView)

export default NotificationViewContainer
