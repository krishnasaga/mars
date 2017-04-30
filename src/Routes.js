import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import EngagementsContainer from './Engagements/EngagementsContainer.js'
import EngagementViewContainer from './Engagements/EngagementViewContainer.js'
import NotificationViewContainer from './Notifications/NotificationViewContainer.js'
import LatestDealsViewContainer from 'Engagements/LatestDeals/LatestDealsViewContainer.js'
import EngagementReducer from './Engagements/reducers/reducers.js'
import thunk from 'redux-thunk'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    routing: routerReducer,
    deals: EngagementReducer
  }),
  applyMiddleware(thunk),
);
store.subscribe( state => console.log(state) );

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const AppRoutes = () => { return (
    <Provider store={store} >
      <Router history={ browserHistory } >
        <Route path="/" component={ EngagementsContainer } >
          <Route path="notification/4444" component={ NotificationViewContainer } />
          <Route path="deal/4444" component={ LatestDealsViewContainer } />
          <Route path="promotion/4444" component={ EngagementViewContainer } />
        </Route>
      </Router>
    </Provider>
  ) };

export default AppRoutes;
