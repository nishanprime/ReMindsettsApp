import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";

const header = () => {
  // isactive for link

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link
              className="nav-link navbar-brand"
              activeClassName="active"
              to="/"
            >
              <img className=" preload-me" src="/images/logo-mindset.png" />
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
                {/* add active class if Link is active */}

                <li className={`nav-item`}>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
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
              </div>

              {/* if signed in show the avatar */}
              <ProfileAvatar />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default header;
