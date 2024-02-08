import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const initialState = {
    notifications: {
      filter: 'important',
      entities: {
        1: { id: 1, message: 'Notification 1', read: false },
        2: { id: 2, message: 'Notification 2', read: true },
        3: { id: 3, message: 'Notification 3', read: false }
      }
    }
  };

  it('should return filterTypeSelected', () => {
    expect(filterTypeSelected(initialState)).toBe('important');
  });

  it('should return getNotifications', () => {
    const expectedNotifications = {
      1: { id: 1, message: 'Notification 1', read: false },
      2: { id: 2, message: 'Notification 2', read: true },
      3: { id: 3, message: 'Notification 3', read: false }
    };
    expect(getNotifications(initialState)).toEqual(expectedNotifications);
  });

  it('should return getUnreadNotifications', () => {
    const expectedUnreadNotifications = {
      1: { id: 1, message: 'Notification 1', read: false },
      3: { id: 3, message: 'Notification 3', read: false }
    };
    expect(getUnreadNotifications(initialState)).toEqual(expectedUnreadNotifications);
  });
});
