const ActionType = { IMAGE_LIST: 'IMAGE_LIST' };
const Status = {
    LOADING: 'LOADING',
    LOADED:  'LOADED',
    FAILD: 'FAILD'
};

function createImageList(status : Status,data : array ) {
  return {
    type: ActionType.IMAGE_LIST,
    status: status,
    data: data || null
  };
};

export { createImageList , ActionType, Status };
