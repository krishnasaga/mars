import { createImageList, Status } from './actions.js'

describe('action creator loadImages', () => {
  
  it('should do loading', () => {
    var action = createImageList(Status.LOADING);
    expect(action.status).toBe(Status.LOADING);
    expect(action.data).toBe(null);
  });
  
  it('should do loaded', () => {
    var action = createImageList(Status.LOADED,[]);
    expect(action.status).toBe(Status.LOADED);
    expect(action.data).toEqual(expect.arrayContaining([]));
  });
  
  it('should fail loading', () => {
    var action = createImageList(Status.FAILD);
    expect(action.status).toBe(Status.FAILD);
    expect(action.data).toBe(null);
  });
  
});

describe('action constents', () => {
  
  it('should have status codes', () => {
    expect(Status.LOADED).toBe('LOADED');
    expect(Status.LOADING).toBe('LOADING');
    expect(Status.FAILD).toBe('FAILD');
  });

});
