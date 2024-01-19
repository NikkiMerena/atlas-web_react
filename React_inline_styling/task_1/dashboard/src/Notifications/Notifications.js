import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

    notifications: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      border: '3px dotted #00003C',
      marginRight: '.5rem',
    },

    notificationsParagraph: {
      fontFamily: "'Galano Grotesque Alt', sans-serif",
      fontWeight: '400',
      padding: '1.5rem 0 .3rem .8rem',
      margin: '0',
      fontSize: '.8rem',
    },

    menuItem: {
      fontFamily: "'Galano Grotesque Alt', sans-serif",
      fontWeight: '400',
      fontSize: '0.8rem',
      marginRight: '1rem',
    },

    notificationsUnorderedList: {
      paddingLeft: '2.3rem',
    },
  })

class Notifications extends Component {
    constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    render() {
    const { displayDrawer, listNotifications } = this.props;

    const buttonStyle = {
        position: "absolute",
        background: "transparent",
        padding: "0",
        cursor: "pointer",
    };

    const iconStyle = {
        width: "15px",
        height: "15px",
    };

    return (
        <>
          <div className={css(styles.menuItem)} data-testid="menuItem">
            <p>Your Notifications</p>
          </div>
          {displayDrawer && (
            <div className={css(styles.notifications)} data-testid="notifications">
              <div className="Notifications-content">
                {listNotifications.length > 0 && (
                  <p className={css(styles.notificationsParagraph)}>
                    Here is the list of notifications
                  </p>
                )}
                <ul className={css(styles.notificationsUnorderedList)}>
                  {listNotifications.length === 0 ? (
                    <NotificationItem value='No new notification for now' />
                  ) : (
                    listNotifications.map(notification => (
                      <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={() => this.markAsRead(notification.id)}
                      />
                    ))
                  )}
                </ul>
              </div>
              <button
                aria-label="Close"
                style={buttonStyle}
                onClick={handleButtonClick}>
                  <img src={closeIcon} alt="Close" style={iconStyle} />
              </button>
            </div>
          )}
        </>
      );
    }
  }

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;
