import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { useDispatch } from 'react-redux';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Wrap the action creators with the dispatch function, to bound them together
export const boundMarkAsRead = (index) => useDispatch(markAsRead(index));
export const boundNotificationFilter = (filter) => useDispatch(setNotificationFilter(filter));
