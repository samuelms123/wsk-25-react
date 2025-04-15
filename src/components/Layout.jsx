import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();
  useEffect(() => {
    console.log('autolog used!');
    handleAutoLogin();
  }, []);
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/upload">Upload</Link>
                </li>
                <li>
                  <Link to="/logout">Log out</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
