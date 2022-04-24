import React from "react";

const Professional = () => {
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
                alt="Mindsetts Logo"
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
                <li className="nav-item ">
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
        <div className="professional-signup-area">
          <div className="professional-signup-section">
            <div className="container">
              <h2>START CONNECTING TO CLIENTS</h2>
              <h6>
                Choose the right clients in a safe and confidential space:
                Simply register, record your video, and relax.
              </h6>
              <p>
                At Mindsetts, our promise to you is that your personal details
                will always be safe with us.
              </p>
              <div className="professional-signup-form-part">
                <form
                  action
                  method="POST"
                  id="professionals-signup-form"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="p4gLL9gU20elXZfoviUNA94Zig15QIkl5NR8iiBL"
                  />{" "}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <label
                      id="email-error"
                      className="error"
                      htmlFor="email"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <label
                      id="password-error"
                      className="error"
                      htmlFor="password"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="OptionSelect1"
                      name="gender"
                      required
                    >
                      <option value hidden>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="OptionSelect2"
                      name="insured"
                      required
                    >
                      <option value hidden>
                        Are you insured?
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="bio"
                      placeholder="Bio"
                      rows={5}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group specialities">
                    <select
                      className="form-control"
                      id="specialities"
                      name="specialities[]"
                      multiple="multiple"
                      required
                    >
                      <option value={1}>Hypnobirthing</option>
                      <option value={2}>Depression</option>
                      <option value={3}>Eating problems</option>
                      <option value={4}>Exam stress</option>
                      <option value={5}>Female sexual problems</option>
                      <option value={6}>Blushing</option>
                      <option value={7}>Anxiety</option>
                      <option value={8}>Addiction</option>
                      <option value={9}>Anger management</option>
                      <option value={10}>Bruxism (teeth grinding)</option>
                      <option value={11}>Irritable bowel syndrome</option>
                      <option value={12}>Low self-confidence</option>
                      <option value={13}>Low self-esteem</option>
                      <option value={14}>Male sexual problems</option>
                      <option value={15}>Obsessions and compulsions</option>
                      <option value={16}>Pain management</option>
                      <option value={17}>PTSD</option>
                      <option value={18}>Public speaking</option>
                      <option value={19}>Relationship issues</option>
                      <option value={20}>Relaxation</option>
                      <option value={21}>Sleep problems</option>
                      <option value={22}>Sports performance</option>
                      <option value={23}>Stress</option>
                      <option value={24}>Stuttering</option>
                      <option value={25}>Tinnitus</option>
                      <option value={26}>Weight loss</option>
                      <option value={27}>Insomnia</option>
                      <option value={28}>Alcohol abuse</option>
                      <option value={29}>Drug addiction</option>
                      <option value={30}>Quit smoking</option>
                      <option value={31}>Gambling addiction</option>
                      <option value={32}>Sex addiction</option>
                      <option value={33}>Food addiction</option>
                      <option value={34}>Fear of flying</option>
                      <option value={35}>Panic attacks</option>
                      <option value={36}>Phobias</option>
                      <option value={37}>Fertility</option>
                    </select>
                    <label
                      id="specialities-error"
                      className="error"
                      htmlFor="specialities"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Business Name"
                      name="business_name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control video-upload"
                      type="file"
                      accept="video/*"
                      name="video_upload"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <p className="small-title">Membership</p>
                    <div className="custom-radio-button">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="annual"
                          name="member_ship"
                          id="memberShipPlan1"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="memberShipPlan1"
                        >
                          Annual
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="monthly"
                          name="member_ship"
                          id="memberShipPlan2"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="memberShipPlan2"
                        >
                          Monthly
                        </label>
                      </div>
                    </div>
                    <label
                      id="member_ship-error"
                      className="error"
                      htmlFor="member_ship"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="form-group">
                    <p className="small-title">Payment Method</p>
                    <div className="custom-radio-button">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment_method"
                          defaultValue="paypal"
                          id="paymentMethod1"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="paymentMethod1"
                        >
                          PayPal
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="payment_method"
                          defaultValue="debitcard"
                          id="paymentMethod2"
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="paymentMethod2"
                        >
                          Debit / Credit Card
                        </label>
                      </div>
                    </div>
                    <label
                      id="payment_method-error"
                      className="error"
                      htmlFor="payment_method"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="signin-button-part">
                    <input
                      type="submit"
                      className="signin-button"
                      defaultValue="Sign Up"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
                    alt="Mindsetts Logo"
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

export default Professional;
