import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link to="/">
              <a className="navbar-brand">
                <img className=" preload-me" src="/images/logo-mindset.png" />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active ">
                  <Link to="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/about">
                    <a className="nav-link">About </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/professionals">
                    <a className="nav-link">Professionals</a>
                  </Link>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    PODCASTS
                  </a>
                </li>
                <li className="nav-item ">
                  <Link to="/testimonials">
                    <a className="nav-link">Testimonials</a>
                  </Link>
                </li>
              </ul>
              <div className="header-right">
                <Link to="/signin">
                  <a className="btn-border-round">Sign in</a>
                </Link>
                <i className="ti-search" id="toggle-search" />
                <i className="ti-close" id="toggle-close" />
                <input
                  style={{ display: "none" }}
                  id="searchBar"
                  name="search"
                  type="search"
                  placeholder="Search…"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
