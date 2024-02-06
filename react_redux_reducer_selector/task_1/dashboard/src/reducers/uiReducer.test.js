import uiReducer from './uiReducer';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return the initial state when an unrelated action is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(undefined, displayNotificationDrawer())).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });

  // More tests for other actions...
});

