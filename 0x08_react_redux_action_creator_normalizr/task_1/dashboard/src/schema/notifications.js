import * as notificationsData from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default.filter(
    (notification) => notification.author.id === userId
  ).map((notification) => ({
    guid: notification.id,
    isRead: notification.isRead,
    type: notification.type,
    value:notification.context,
  }));
};
