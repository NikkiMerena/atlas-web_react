import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext'; // Import AppContext

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className="Footer-main">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>

      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;
