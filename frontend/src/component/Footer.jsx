import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Useful links</h2>
              <ul>
                <li>
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <a>About us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/professionals">
                    <a>Professionals</a>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <a href="#">Podcasts</a>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials">
                    <a href="#">Testimonials</a>
                  </Link>
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
              <Link to="/">
                <a className>
                  <img
                    className=" preload-me"
                    src="images/logo-mindset.png"
                    alt="Mindsetts Logo"
                  />
                </a>
              </Link>
            </div>
            <p>Mindsetts - Make choosing the right therapist or coach easy</p>
          </div>
          <div className="footer-contact">
            <p>
              <span>Address:</span>Hammonds Green Farm, Framfield, East Sussex,
              England, TN22 5QH
            </p>
            <p>
              <span>mail:</span>
              <a href="mailto: info@mindsetts.com">info@mindsetts.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
