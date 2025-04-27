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
          <h1 className="mb-4 text-4xl">My app</h1>
          <ul className="mb-4 flex justify-end overflow-hidden rounded bg-stone-900 p-2">
            <li>
              <Link
                className="ml-2 block rounded p-4 text-center text-stone-50 transition duration-300 hover:bg-stone-600"
                to="/"
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="ml-2 block rounded p-4 text-center text-stone-50 transition duration-300 hover:bg-stone-600"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="ml-2 block rounded p-4 text-center text-stone-50 transition duration-300 hover:bg-stone-600"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="ml-2 block rounded p-4 text-center text-stone-50 transition duration-300 hover:bg-stone-600"
                    to="/logout"
                  >
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="ml-2 block rounded p-4 text-center text-stone-50 transition duration-300 hover:bg-stone-600"
                  to="/login"
                >
                  Log in
                </Link>
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
