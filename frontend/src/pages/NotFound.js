import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div
        className="content d-flex justify-content-center align-items-center m-4"
        id="main"
        style={{ flexDirection: 'column' }}
      >
        <div className="not-found ">
          <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
            404
          </h1>
          <div className="inline-block align-middle">
            <h2 className="font-weight-normal lead" id="desc">
              The page you requested was not found.
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center homepage-btn m-4">
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
