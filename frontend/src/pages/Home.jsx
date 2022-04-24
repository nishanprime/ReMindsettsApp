import React from "react";

const Home = () => {
  return (
    <div>
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
      <div className="content">
        <div className="home">
          <section
            className="banner_section"
            style={{
              backgroundImage:
                'url("http://124.123.122.137:8080/mindsetts-lv-v2/images/banner.jpg")',
            }}
          >
            <div className="container">
              <h2>Choose the Right Therapist or Coach Safely and Easily.</h2>
              <h6> Take Action with our FREE to use Video App</h6>
              <div className="banner_buttons">
                {/* <a href="#">Apple Store</a>
                <a href="#">Google Play</a> */}
                <a
                  href="https://apps.apple.com/us/app/mindsetts/id1548697361"
                  target="_blank"
                >
                  <img
                    className="app-logo-button"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/app-download-btn.png"
                    alt="App Store Image"
                  />
                </a>
                <a href="#">
                  <img
                    className="app-logo-button"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/get_it_on_play_logo_large.png"
                    alt="App Store Image"
                  />
                </a>
              </div>
              <div className="banner_bottom_buttons">
                <a
                  className="banner_top_left_btn btn-border-round"
                  href="http://124.123.122.137:8080/mindsetts-lv-v2/professionals-signup-form"
                >
                  Professionals Register here
                </a>
                <a
                  className="banner_top_right_btn btn-border-round"
                  href="http://124.123.122.137:8080/mindsetts-lv-v2/get-matched"
                >
                  Clients Register here
                </a>
              </div>
            </div>
          </section>
          <section className="home_get_matched_section">
            <div className="container">
              <h2>Find the Right Therapist or Coach for You</h2>
              <div className="get_matched_buttons">
                <a
                  className="btn-border-round"
                  href="http://124.123.122.137:8080/mindsetts-lv-v2/get-matched"
                >
                  Get Matched
                </a>
              </div>
            </div>
          </section>
          <section className="therapists_section">
            <div className="container">
              <h2>Meet your Therapists</h2>
              <div className="therapists_slider_wrapper">
                <div className="therapists_slider" id="therapistsSlider">
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(73)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Tina Gray</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(90)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nicholas Gilbey</h2>
                      <p>
                        Specialising in: Addiction,Anger management,Blushing
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(99)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Therapist Test</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(100)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Cathy Hargreaves</h2>
                      <p>
                        Specialising in: Addiction,Alcohol abuse,Drug
                        addiction,Food addiction,Gambling addiction,Quit
                        smoking,Sex addiction,Anxiety,Fear of flying,Panic
                        attacks,Phobias
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(102)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Cindy Galvin</h2>
                      <p>Specialising in: Addiction</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(103)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Tina Gray</h2>
                      <p>
                        Specialising in: Weight loss,Eating problems,Low
                        self-confidence,Relationship issues,Depression
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(105)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <p>Specialising in: Addiction</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(107)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>David Michael</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(108)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>David Michael</h2>
                      <p>Specialising in: Hypnobirthing,Anxiety</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(109)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(110)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(111)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Cindy Galvin</h2>
                      <p>Specialising in: Low self-confidence</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(113)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Henry William</h2>
                      <p>
                        Specialising in: Bruxism (teeth
                        grinding),Hypnobirthing,Depression
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(116)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <p>Specialising in: Addiction</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(117)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Amanda Testing</h2>
                      <p>Specialising in: Addiction</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(119)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <p>
                        Specialising in: Addiction,Alcohol abuse,Gambling
                        addiction,Sex addiction,Anger
                        management,Stuttering,Weight loss
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(120)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Test1</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(121)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Henry William</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(122)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Test1</h2>
                      <p>
                        Specialising in: Alcohol abuse,Drug addiction,Food
                        addiction,Gambling addiction,Anxiety,Fear of
                        flying,Insomnia
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(123)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <p>
                        Specialising in: Alcohol abuse,Drug addiction,Food
                        addiction
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(124)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(125)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nicgilbey G</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(126)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>henry therapist</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(127)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(131)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Javier Orti</h2>
                      <p>Specialising in: Low self-confidence</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(132)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Cathy Hargreaves</h2>
                      <p>
                        Specialising in: Panic
                        attacks,Phobias,Anxiety,Depression,Eating problems,Sleep
                        problems,Insomnia,Stress,Weight loss,Relaxation,Low
                        self-esteem,Low self-confidence,Pain management
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(133)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Robyn Spens</h2>
                      <p>Specialising in: Alcohol abuse,Anxiety</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(134)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Adrian Luckie</h2>
                      <p>Specialising in: Alcohol abuse</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(135)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Sian Peer</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(136)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Andrea Yearsley</h2>
                      <p>
                        Specialising in: Low self-confidence,Low
                        self-esteem,Public speaking,Stress,Fertility,Relaxation
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(137)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Sian Collins</h2>
                      <p>Specialising in: Anxiety,Panic attacks</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(138)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Meg Mac</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(141)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(146)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>N G</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(148)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Nic Gilbey</h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(149)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2> </h2>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(152)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Edward Junior</h2>
                      <p>Specialising in: Hypnobirthing,Depression</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(155)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>tr tr</h2>
                      <p>
                        Specialising in: Depression,Eating problems,Exam stress
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(157)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>testtest testtest</h2>
                      <p>
                        Specialising in: Hypnobirthing,Depression,Eating
                        problems
                      </p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(158)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>tony stark</h2>
                      <p>Specialising in: Depression,Exam stress,Blushing</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                  <div
                    className="therapists_slide"
                    onclick="therapistProfile(163)"
                  >
                    <div className="therapists_image">
                      <img
                        className=" preload-me"
                        src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                      />
                    </div>
                    <div className="therapists_text">
                      <h2>Harry Knox</h2>
                      <p>Specialising in: Depression</p>
                      <span className="online">Online</span>
                    </div>
                  </div>
                </div>
                <ul className="therapists_slider_paginator">
                  <li className="prev" id="prevTherapist">
                    <i className="ti-angle-left" />
                  </li>
                  <li className="next" id="nextTherapist">
                    <i className="ti-angle-right" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="why_section">
            <div className="container">
              <h2>Why Mindsetts?</h2>
              <ul>
                <li>
                  <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                  <span>Free confidential 20 minute discovery calls</span>
                </li>
                <li>
                  <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                  <span>Free and unlimited access to video biographies</span>
                </li>
                <li>
                  <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                  <span>
                    Instantly message your preferred therapist/coach on the app
                  </span>
                </li>
                <li>
                  <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                  <span>
                    Find your perfect match to get the impact you need
                  </span>
                </li>
                <li>
                  <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                  <span>Simple registration process to kickstart change</span>
                </li>
                <li>
                  <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                  <span>
                    Experience who you want to work with before making any kind
                    of commitment
                  </span>
                </li>
              </ul>
              <a
                className="btn-border-round"
                href="http://124.123.122.137:8080/mindsetts-lv-v2/get-matched"
              >
                Book a FREE 20 minute discovery call
              </a>
            </div>
          </section>
          <input type="hidden" name="selected_id" id="selected_id" />
          <section className="advisors_section d-none">
            <div className="container" id="advisorsBody">
              <div className="advisor_more_button">
                <a
                  className="btn-border-round"
                  href="Javascript:void(0)"
                  onclick="loadmore()"
                >
                  See More Therapists
                </a>
              </div>
            </div>
          </section>
          <section className="video_section">
            <div className="container">
              <iframe
                width={585}
                height={439}
                src="https://www.youtube.com/embed/R-BE_eh-Pfo"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
          <section className="connections_section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="connections_image">
                    <img
                      className=" preload-me"
                      src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="connections_text">
                    <h2>
                      Are you a Therapist or Coach? We’ve made finding the right
                      clients simple and safe
                    </h2>
                    <p>
                      Our mission is to maximise your use of time while helping
                      clients access help when they need it, enabling you to
                      make instant connections.
                    </p>
                    <p>Mindsetts will: </p>
                    <ul>
                      <li>
                        <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                        <span>
                          Reserve your time for people you want to reach and
                          deflect the ones you don’t
                        </span>
                      </li>
                      <li>
                        <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                        <span>
                          Save time and make a lasting impact with a 2 minute
                          video
                        </span>
                      </li>
                      <li>
                        <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                        <span>
                          Increase your visibility and boost your referrals
                        </span>
                      </li>
                      <li>
                        <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                        <span>
                          Self promote as much as you want and build your brand
                          and significance at no extra cost
                        </span>
                      </li>
                      <li>
                        <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                        <span>
                          Connect with clients 24/7 and create success while you
                          sleep
                        </span>
                      </li>
                      <li>
                        <img src="http://124.123.122.137:8080/mindsetts-lv-v2/images/check-circle.png" />
                        <span>
                          Operate in a safe and secure space, keeping you
                          personal details private
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a
                className="btn-border-round"
                href="http://124.123.122.137:8080/mindsetts-lv-v2/professionals-signup-form"
              >
                Make Connections
              </a>
            </div>
          </section>
          <section className="quotes _section">
            <div className="container">
              <blockquote
                className="blockquote"
                style={{
                  backgroundImage:
                    'url("http://124.123.122.137:8080/mindsetts-lv-v2/images/quotes.png")',
                }}
              >
                <p>
                  Strength doesn’t come from what you can do. It comes from
                  overcoming the things you once thought you couldn’t.
                </p>
              </blockquote>
            </div>
          </section>
        </div>
        <div className="container">
          <div
            className="modal fade"
            id="myModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  {/* 16:9 aspect ratio */}
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src
                      id="video"
                      allowscriptaccess="always"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bookDiscoveryCallModelDiv" />
        <div
          className="main-loader"
          id="main-loader"
          style={{ display: "none" }}
        >
          <div className="main-loader-inner" />
        </div>
      </div>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Useful links</h2>
                <ul>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/about-us">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/professionals">
                      Professionals
                    </a>
                  </li>
                  <li>
                    <a href="#">Podcasts</a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/therapists-directory">
                      Directory
                    </a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Other Links</h2>
                <ul>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/terms-of-use">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/privacy-policy">
                      Privacy&nbsp;
                    </a>
                  </li>
                  <li>
                    <a href="http://124.123.122.137:8080/mindsetts-lv-v2/sitemap">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Whats Worrying You?</h2>
                <ul>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/anxiety/">
                      Anxiety
                    </a>
                  </li>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/depression/">
                      Depression
                    </a>
                  </li>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/addiction/">
                      Addiction
                    </a>
                  </li>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/eating-problems">
                      Eating Problems
                    </a>
                  </li>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/alcohol/">
                      Alcohol
                    </a>
                  </li>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/career/">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="https://mindsetts.com/therapists-directory/wpbdp_category/exam-stress/">
                      Exam Stress
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-logo">
              <div id="branding-bottom">
                <a className href="http://124.123.122.137:8080/mindsetts-lv-v2">
                  <img
                    className=" preload-me"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/logo-mindset.png"
                    alt="Mindsetts"
                  />
                </a>
              </div>
              <p>Mindsetts - Make choosing the right therapist or coach easy</p>
            </div>
            <div className="footer-contact">
              <p>
                <span>Address:</span>Hammonds Green Farm, Framfield, East
                Sussex, England, TN22 5QH
              </p>
              <p>
                <span>mail:</span>
                <a href="mailto: info@mindsetts.com">info@mindsetts.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
