import React from "react";

const header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand"
              href="http://124.123.122.137:8080/mindsetts-lv-v2"
            >
              <img
                className=" preload-me"
                src="http://124.123.122.137:8080/mindsetts-lv-v2/images/logo-mindset.png"
              />
            </a>
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
                  <a
                    className="nav-link"
                    href="http://124.123.122.137:8080/mindsetts-lv-v2"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://124.123.122.137:8080/mindsetts-lv-v2/about-us"
                  >
                    About{" "}
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://124.123.122.137:8080/mindsetts-lv-v2/professionals"
                  >
                    Professionals
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    PODCASTS
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://124.123.122.137:8080/mindsetts-lv-v2/testimonials"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
              <div className="header-right">
                <a
                  className="btn-border-round"
                  href="http://124.123.122.137:8080/mindsetts-lv-v2/sign-in"
                >
                  Sign in
                </a>
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
