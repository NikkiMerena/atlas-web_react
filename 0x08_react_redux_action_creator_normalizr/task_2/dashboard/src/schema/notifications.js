import * as notifData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

// create entities
const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

// Normalize the data outside of function
const normalizedData = normalize(notifData.default, [notification]);

// Get notifications by user id
const getAllNotificationsByUser = (userId) => {
  const userNotifications = [];

  // Iterate through all notification IDs
  for(const id of normalizedData.result) {
    const notif = normalizedData.entities.notifications[id];

    if(notif.author === userId) {
      const message = normalizedData.entities.messages[notif.context]
      userNotifications.push({
        guid: message.guid,
        isRead: message.isRead,
        type: message.type,
        value: message.value
      });
    }
  }
  return userNotifications;
}

export { user, message, notification, getAllNotificationsByUser };
