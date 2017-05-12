import { ActionType } from './actions.js';

function doImageList(state,action ){
   if( action.type === ActionType.LOAD_IMAGES )
     return Object.assign({},state,{ LOAD_IMAGES: {
         state: action.state,
         data: action.data
     }});
};

export { doImageList }
