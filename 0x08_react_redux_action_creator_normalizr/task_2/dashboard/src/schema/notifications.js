import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define user schema
const user = new schema.Entity('users');

// Define message schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define notification schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizedData = normalize(notificationsData, [notification]);

const getAllNotificationsByUser = (userId) => {
  return notificationsData.default.filter(
    (notification) => notification.author.id === userId
  ).map((notification) => ({
    guid: notification.id,
    isRead: notification.isRead,
    type: notification.type,
    value:notification.context,
  }));
};

export { user, message, notification, normalizedData, getAllNotificationsByUser };
