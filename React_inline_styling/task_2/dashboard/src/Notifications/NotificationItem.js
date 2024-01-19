import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;
    const style = (type === 'urgent') ? styles.urgent : styles.default;

    return (
      <li
      onClick={() => markAsRead(id)}
      className={css(style)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}>
      {value}
      </li>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'blue',
  },
  urgent: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'red',
  },
})

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;
