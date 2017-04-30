import HTTP from './HTTP.js'

const NASA = {
  search: function(keyword) {
    return HTTP.get('//api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
  }
}
