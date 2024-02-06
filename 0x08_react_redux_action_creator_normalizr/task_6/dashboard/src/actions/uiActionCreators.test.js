import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('UI Action Creators', () => {
  it('login action creator returns correct action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const action = login(email, password);

    expect(action).toEqual({
      type: LOGIN,
      user: { email, password }
    });
  });

  it('logout action creator returns correct action', () => {
    const action = logout();
    expect(action).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer action creator rerturns action', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer action creator returns correct action', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
