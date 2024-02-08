// Functions or libraries
import { createSelector } from 'reselect';


// Selector for the filter named filterTypeSelected
export const filterTypeSelected = state => state.notifications.filter;

// Selector for the notifications returning a list of notifications in a Map format
export const getNotifications = state => state.notifications.entities;

// Selector for the unread notifications returning a list of unread notifications in a Map format
export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => {
    return notifications.filter(notification => !notification.read);
  }
);
