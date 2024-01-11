import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ float: 'right', background: 'none', border: 'none' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt="Close" style={{ width: '20px', height: '20px' }} />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="urgent" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
