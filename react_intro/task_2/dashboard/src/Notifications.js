import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{ float: 'right', background: 'none', border: 'none' }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
        src={closeIcon}
        alt="Close"
        style={{ width: '20px', height: '20px'}}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New Resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
