
const doImagesList = (state,action) => {
    
    if(action.type === 'IMAGE_LIST' ) return Object.assign({},state,{
        IMAGE_LIST: {
            status: action.status,
            data: action.data
        }
    });
    
    return state;
};

export { doImagesList };
