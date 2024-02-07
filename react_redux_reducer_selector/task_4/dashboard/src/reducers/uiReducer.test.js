import uiReducer from './uiReducer';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { Map } from 'immutable';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({})
  });

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.equals(initialState)).toBe(true);
  });

  it('should return the initial state when an unrelated action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.equals(initialState)).toBe(true);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const state = uiReducer(undefined, displayNotificationDrawer());
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(state.equals(expectedState)).toBe(true);
  });

  // More tests for other actions...
});
