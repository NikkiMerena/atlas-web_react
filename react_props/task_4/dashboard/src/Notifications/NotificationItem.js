// NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} />
    );
  }
  return (
    <li data-notification-type={type}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

export default NotificationItem;
