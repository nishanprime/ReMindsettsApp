import React from "react";

const About = () => {
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
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="http://124.123.122.137:8080/mindsetts-lv-v2"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item active ">
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
        <div className="about-area">
          <div className="about-banner-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>Mindsetts</h1>
                  <h2>Helping people is our world.</h2>
                  <p>We bring people together to transform lives.</p>
                </div>
                <div className="col-md-6">
                  <img
                    className="banner-img"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/banner.jpg"
                    alt="Banner Image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mindsetts-section">
            <div className="container">
              <h2>Mindsetts</h2>
              <h4>
                We’re on a Mission to Make a Significant Difference in the
                Business of Therapy.
              </h4>
              <p>
                To help people take control of their health, wealth,
                relationships and lives. How? By connecting incredible
                therapists with the right clients in one safe space, to make
                real change.
              </p>
            </div>
          </div>
          <div className="founder-section">
            <div className="container">
              <h2>Meet the founders, Tina and Sian</h2>
              <p>
                <b>
                  Tina and Sian met while training in Rapid Transformational
                  Therapy (RTT®) in 2015, and they both have travelled all over
                  the world training over 10,000 students in RTT Hypnotherapy.
                </b>
              </p>
              <p>
                Having seen the impact that existing outdated approaches have on
                therapist’s ability to thrive and reach clients that need their
                help, we created Mindsetts, a solution to close the gap and
                connect those invested in helping others with the people that
                need their help.
              </p>
              <p>
                There is a whole world of people out there living in the shadow
                of who they can actually be.
              </p>
              <div className="founder-avtar-part">
                <div className="avtar-block">
                  <img
                    className="founder-avtar"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/banner.jpg"
                    alt="Tina"
                  />
                  <h6>Tina</h6>
                </div>
                <div className="avtar-block">
                  <img
                    className="founder-avtar"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                    alt="Sian"
                  />
                  <h6>Sian</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="about-degree-section">
            <div className="container">
              <h2>
                What degree of freedom would you have if your business was
                working for you?
              </h2>
              <p>
                This is a really important question, and perhaps one of our
                earliest thoughts and motivations for creating Mindsetts.
              </p>
              <p>
                We are two therapists, grounded in the self development and
                knowledge industry, striving for growth. We created Mindsetts
                out of a mission to help support therapists and coaches become
                masters of their craft and enjoy the quality of life they crave.
              </p>
              <p>
                We know first hand how hard it is to find the perfect client and
                how lost you can become once the business of marketing and self
                promotion begins.
              </p>
              <p>
                Where you are right now doesn’t need to be forever! We want to
                help people like you make an impact because we know how
                difficult that is, and yet how incredibly talented you are.
              </p>
              <p>
                We have seen so many talented, enthusiastic therapists and
                coaches fail to thrive.
              </p>
              <p>
                So many of our colleagues are great at doing the work, but are
                not good at selling the great work they do. We know if people
                could only meet them, they would jump at the opportunity to work
                with them.
              </p>
              <p>
                <b>All change begins with Mindsetts.</b>
              </p>
            </div>
          </div>
          <div className="about-single-image-section">
            <img
              src="http://124.123.122.137:8080/mindsetts-lv-v2/images/banner.jpg"
              alt="Background Full Image"
            />
          </div>
          <div className="about-client-words">
            <div className="container">
              <h2>All Change Begins with the Mind</h2>
              <p>
                “I’m a firm believer in practicing what I preach, RTT
                transformed my life in a myriad of different ways. Before I
                discovered the Marisa Peer method, I had a 20-year career in
                investment banking, but RTT showed me the direction I really
                wanted to take with my life. Despite having a successful career,
                it felt as though my life was missing direction, that direction
                was found when I discovered my true passion, helping other
                people transform their lives in the way Marisa Peer’s teachings
                transformed mine.
              </p>
              <p>
                Rapid Transformational Therapy didn’t just improve my
                professional life, it led me into an amazing new relationship
                and allowed me to live healthier, happier and see the worth in
                investing in my holistic wellbeing. After one RTT session, I was
                able to safely lose three stone, but the biggest difference I
                noticed wasn’t at my feet when I looked at the scales, it was in
                my confidence, relationships and self-worth.”
              </p>
              <h6>Tina x</h6>
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
export default About;
