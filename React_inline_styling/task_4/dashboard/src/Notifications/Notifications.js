import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const fadeIn = {
  'from': { opacity: 0.5 },
  'to': { opacity: 1 },
};

const bounce = {
  '0%': { tranform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { tranform: 'translateY(5px)' },
};

const styles = StyleSheet.create({

    notifications: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      border: '3px dotted #00003C',
      marginRight: '.5rem',
      '@media (max-width: 900px)': {
        // Styles to apply when the screen width is 900px or less
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        zIndex: 10, // Ensure it's above other content
      },
    },

    notificationsParagraph: {
      fontFamily: "'Galano Grotesque Alt', sans-serif",
      fontWeight: '400',
      padding: '1.5rem 0 .3rem .8rem',
      margin: '0',
      fontSize: '.8rem',
      '@media (max-width: 900px)': {
        fontSize: '20px',
        padding: '1rem 0',
      }
    },

    menuItem: {
      fontFamily: "'Galano Grotesque Alt', sans-serif",
      fontWeight: '400',
      fontSize: '0.8rem',
      marginRight: '1rem',
      position: 'absolute',
      right: 0,
      backgroundColor: '#fff8f8',
      cursor: 'pointer',
      zIndex: 20,
      ':hover': {
        animationName: [fadeIn, bounce],
        animationDuration: '1s, 0.5s',
        animationIterationCount: '3, 3',
      },
    },

    notificationsUnorderedList: {
      paddingLeft: '2.3rem',
      '@media (max-width: 900px)': {
        listStyle: 'none',
        paddingLeft: 0,
        margin: 0,
        width: '100%',
      }
    },
  })

class Notifications extends Component {
    constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false, // Initial state for the drawer visibility
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this); // Bind the toggleDrawer method
    }

    // Method to toggle the drawer visibilty
    toggleDrawer() {
      this.setState(prevState => ({
        displayDrawer: !prevState.displayDrawer
      }));
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
    const { listNotifications } = this.props;
    const { displayDrawer } = this.state;

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
          <div className={css(styles.menuItem)} data-testid="menuItem" onClick={this.toggleDrawer}>
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
