import React from "react";
import MainLayout from "../layouts/MainLayout";

const Professionals = () => {
  return (
    <>
      <div className="professionals-area">
        <div className="professionals-banner-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Mindsetts for Therapists and Coaches</h1>
                <p>Creating a safe space for you to do business.</p>
                <Link
                  className="banner-button-link btn-border-round"
                  to="register/professional"
                >
                  Let’s Do It
                </Link>
              </div>
              <div className="col-md-6">
                <img
                  className="banner-img"
                  src="images/banner.jpg"
                  alt="Banner Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="professionals-benefit-app-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>HOW CAN YOU BENEFIT FROM THE APP?</h2>
                <div className="detail-box">
                  <h6>Save time</h6>
                  <p>
                    Connect to clients you want to reach and not the ones you
                    don’t.
                  </p>
                </div>
                <div className="detail-box">
                  <h6>Create success while you sleep</h6>
                  <p>Connect with clients 24/7</p>
                </div>
                <div className="detail-box">
                  <h6>Increase visibility and boost referrals</h6>
                  <p>Build your brand and significance at no extra cost</p>
                </div>
                <div className="detail-box">
                  <h6>Safe and secure</h6>
                  <p>
                    Operate in a safe and secure space, keeping your personal
                    details private.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="benefit-img"
                  src="images/banner.jpg"
                  alt="Banner Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="professionals-memebership-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Link to="register/professional" className="memebership-box">
                  <div className="inner-area">
                    <h2>ANNUAL MEMBERSHIP</h2>
                    <div className="memebership-content">
                      <img
                        src="images/banner.jpg"
                        className="membership-image"
                        alt="Membership Image"
                      />
                      <ul>
                        <li>A community of support</li>
                        <li>Space on the platform to promote your services</li>
                        <li>
                          Discounts on Local Lead Generation Campaigns (proven
                          to increase enquiries)
                        </li>
                        <li>High visibility on the web and app directory</li>
                        <li>Opportunity to connect with clients 24/7</li>
                        <li>
                          Safe space to operate without the need to share
                          details
                        </li>
                        <li>
                          Resources to support your growth and development
                        </li>
                        <li>Help to grow your profile</li>
                        <li>Discounts on products and services</li>
                      </ul>
                    </div>
                    <h6>£179</h6>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link to="/register/professional" className="memebership-box">
                  <div className="inner-area">
                    <h2>MONTHLY MEMBERSHIP</h2>
                    <div className="memebership-content">
                      <img
                        src="images/user-placeholder.jpg"
                        className="membership-image"
                        alt="Membership Image"
                      />
                      <ul>
                        <li>A pay as you go model</li>
                        <li>Visibility on the web and app directory</li>
                        <li>Opportunity to connect with clients 24/7</li>
                        <li>
                          Safe space to operate without the need to share
                          details
                        </li>
                        <li>
                          Resources to support your growth and development
                        </li>
                        <li>Help to grow your profile</li>
                      </ul>
                    </div>
                    <h6>£15.99</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="professionals-helping-section">
          <div className="container">
            <h2>Save Time Doing What you Love - Helping People!</h2>
            <p>
              Mindsetts helps therapists and coaches connect with the right
              clients, by sharing your message powerfully.
            </p>
            <p>
              We aim to streamline how clients find therapists and coaches,
              using a unique modern approach to listings.
            </p>
            <p>
              We cement connections between therapists and coaches who do great
              work with people who are in real pain, lack purpose or want to
              excel in life.
            </p>
            <p>
              Using our app clients can experience the real you long before any
              calls are necessary.
            </p>
            <p>
              You can achieve more, demonstrate your full potential and impact
              24/7, serving the people that want to work with you, not those
              that don’t.
            </p>
            <p>
              We aim to maximise your use of time and help clients access the
              help they need when they need it, opening up opportunities to
              forge instantaneous connections.
            </p>
            <p>We won’t take a percentage of your fees to make that happen.</p>
          </div>
        </div>
        <div className="professionals-package-slider-section">
          <div className="container">
            <h2>HERE’S WHAT YOU GET IN THE PACKAGE:</h2>
            <div id="PackageSlider" className="package-slider-part">
              <div className="slider-block">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      20 minute video of yourself, promoting your brand and what
                      you can do to help your clients
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="images/user-placeholder.jpg"
                      className="package-image"
                      alt="Package Image"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-block">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      Space on the platform to promote your own services and
                      products
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="images/banner.jpg"
                      className="package-image"
                      alt="Package Image"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-block">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      Connect 24/7 with clients, giving you a better work, life
                      balance
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="images/banner.jpg"
                      className="package-image"
                      alt="Package Image"
                    />
                  </div>
                </div>
              </div>
              <div className="slider-block">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      Alerts to messages from potential clients, to arrange a 20
                      minute FREE discovery call, saving time and money
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="images/user-placeholder.jpg"
                      className="package-image"
                      alt="Package Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="professionals-yt-video-section">
          <div className="container">
            <iframe
              className="video-yt"
              src="https://www.youtube.com/embed/Vgd24U8c4Nw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="main-loader" id="main-loader" style={{ display: "none" }}>
        <div className="main-loader-inner" />
      </div>
    </>
  );
};

export default Professionals;
