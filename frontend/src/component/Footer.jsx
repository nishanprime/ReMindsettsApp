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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/professionals">Professionals</Link>
                </li>
                <li>
                  <Link to="#">Podcasts</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="http://124.123.122.137:8080/mindsetts-lv-v2/therapists-directory">
                    Directory
                  </Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2>Other Links</h2>
              <ul>
                <li>
                  <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy&nbsp;</Link>
                </li>
                <li>
                  <Link to="/sitemap">Sitemap</Link>
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
