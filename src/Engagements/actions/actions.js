import Deals from 'API/Deals'

function deals(state,data) {
  return { type: 'deals', state: state, data: data || null };
}


function loadDeals(dispatch) {
  dispatch(deals('LOADING'));
  Deals.get()
  .then( data => { return dispatch(deals('LOADED',data)) } )
  .catch( error => {
     console.dir(error);
    return dispatch(deals('ERROR'))
  });
}

export default { loadDeals: loadDeals };
