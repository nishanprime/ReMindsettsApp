import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="nav-link" to="/">
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/professionals">
                    Professionals
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="
                #"
                  >
                    PODCASTS
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/testimonials">
                    Testimonials
                  </Link>
                </li>
              </ul>
              <div className="header-right">
                <Link className="nav-link btn-border-round" to="/signin">
                  Sign in
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
