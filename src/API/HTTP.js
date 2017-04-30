import 'whatwg-fetch'

const HTTP = {
  handleError: function(error){

  },
  get: function(path){
    return fetch(path)
    .then(function(response){
      return response.json();
    });
  },
};

export default HTTP;
