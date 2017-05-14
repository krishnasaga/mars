import { doImagesList } from './reducers.js';

describe('Image list reducer doImagesList',function(){
    it('should return previous state if no cursponding action',function() {
        var state = doImagesList({},{});
        expect(state).toEqual({});
    });
    
    it('should return new state cursponding to action',function() {
        var state = doImagesList({},{ type: 'IMAGE_LIST', status: 'LOADING', data: null });
        expect(state).toEqual({ IMAGE_LIST: { status: 'LOADING', data: null } });
    });
    
    it('should change action specific slice',function() {
        var state = doImagesList({IMAGE_LIST: {} },{ type: 'IMAGE_LIST', status: 'LOADING', data: null });
        expect(state).toEqual({ IMAGE_LIST: { status: 'LOADING', data: null } });
    });
    
});
