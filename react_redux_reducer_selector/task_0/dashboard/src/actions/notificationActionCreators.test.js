import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  it('markAsRead action creator returns the correct action', () => {
    const index = 1;
    const action = markAsRead(index);
    expect(action).toEqual({
      type: MARK_AS_READ,
      index
    });
  });

  it('setNotificationFilter action creator returns the correct action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const action = setNotificationFilter(filter);
    expect(action).toEqual({
      type: SET_TYPE_FILTER,
      filter
    });
  });
});
