import HTTP from './HTTP.js'

const Deals = {
  get: function(){
    return HTTP.get('//quiet-thicket-57017.herokuapp.com/');
  }
}

export default Deals;
