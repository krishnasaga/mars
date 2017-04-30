import NASA from 'API/NASA'

function deals(state,data) {
  return { type: 'deals', state: state, data: data || null };
}


function loadDeals(dispatch) {
  dispatch(deals('LOADING'));
  NASA.search()
  .then( data => { return dispatch(deals('LOADED',data)) } )
  .catch( error => {
     console.dir(error);
    return dispatch(deals('ERROR'))
  });
}

export default { loadDeals: loadDeals };
