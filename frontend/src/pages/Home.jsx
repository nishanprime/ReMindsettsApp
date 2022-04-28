import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfessionalInfo } from '../actions/professionalAction';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {
  const dispatch = useDispatch();

  const allProfessionalInfo = useSelector((state) => state.allProfessionalInfo);
  const { loading, allProfInfo } = allProfessionalInfo;
  useEffect(() => {
    dispatch(getProfessionalInfo());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="home">
        <section
          className="banner_section"
          style={{
            backgroundImage: 'url("images/banner.jpg")',
          }}
        >
          <div className="container">
            <h2>Choose the Right Therapist or Coach Safely and Easily.</h2>
            <h6> Take Action with our FREE to use Video App</h6>
            <div className="banner_buttons">
              <a
                href="https://apps.apple.com/us/app/mindsetts/id1548697361"
                target="_blank"
              >
                <img
                  className="app-logo-button"
                  src="images/app-download-btn.png"
                  alt="App Store Image"
                />
              </a>
              <a href="#">
                <img
                  className="app-logo-button"
                  src="images/get_it_on_play_logo_large.png"
                  alt="App Store Image"
                />
              </a>
            </div>
            <div className="banner_bottom_buttons">
              <Link
                to="/register/professional"
                className="banner_top_left_btn btn-border-round"
              >
                Professionals Register here
              </Link>
              <Link
                className="banner_top_right_btn btn-border-round"
                to="/register/client"
              >
                Clients Register here
              </Link>
            </div>
          </div>
        </section>
        <section className="home_get_matched_section">
          <div className="container">
            <h2>Find the Right Therapist or Coach for You</h2>
            <div className="get_matched_buttons">
              <Link className="btn-border-round" to="/signin">
                Get Matched
              </Link>
            </div>
          </div>
        </section>
        <section className="therapists_section">
          <div className="container">
            <h2>Meet your Therapists</h2>
            {loading ? (
              <h1>Loading...</h1>
            ) : allProfInfo && allProfInfo.length === 0 ? (
              <h1>No Therapist available</h1>
            ) : (
              <div className="therapists_slider_wrapper">
                <div
                  className="therapists_slider slick-initialized slick-slider"
                  id="therapistsSlider"
                >
                  <Carousel responsive={responsive}>
                    {allProfInfo &&
                      allProfInfo.map((eachProf) => (
                        <div
                          className="therapists_slide"
                          onclick="therapistProfile(90)"
                        >
                          <div className="therapists_image">
                            <img
                              className=" preload-me"
                              src="https://st.depositphotos.com/1518767/2572/i/600/depositphotos_25725773-stock-photo-therapist-comforting-a-patient.jpg"
                            />
                          </div>
                          <div className="therapists_text">
                            <h2>{`${eachProf.fullName}`}</h2>
                            <p>{`Specialising in: ${eachProf.expertise}`}</p>
                            <span className="online">Online</span>
                          </div>
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
            )}
            {/* meet your therapist */}
          </div>
        </section>
        <section className="why_section">
          <div className="container">
            <h2>Why Mindsetts?</h2>
            <ul>
              <li>
                <img alt=" " src="images/check-circle.png" />
                <span>Free confidential 20 minute discovery calls</span>
              </li>
              <li>
                <img alt=" " src="images/check-circle.png" />
                <span>Free and unlimited access to video biographies</span>
              </li>
              <li>
                <img alt=" " src="images/check-circle.png" />
                <span>
                  Instantly message your preferred therapist/coach on the app
                </span>
              </li>
              <li>
                <img alt=" " src="images/check-circle.png" />
                <span>Find your perfect match to get the impact you need</span>
              </li>
              <li>
                <img alt=" " src="images/check-circle.png" />
                <span>Simple registration process to kickstart change</span>
              </li>
              <li>
                <img alt=" " src="images/check-circle.png" />
                <span>
                  Experience who you want to work with before making any kind of
                  commitment
                </span>
              </li>
            </ul>
            <Link className="btn-border-round" to="register/client">
              Book a FREE 20 minute discovery call
            </Link>
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
                    src="images/user-placeholder.jpg"
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
                    clients access help when they need it, enabling you to make
                    instant connections.
                  </p>
                  <p>Mindsetts will: </p>
                  <ul>
                    <li>
                      <img alt=" " src="images/check-circle.png" />
                      <span>
                        Reserve your time for people you want to reach and
                        deflect the ones you don’t
                      </span>
                    </li>
                    <li>
                      <img alt=" " src="check-circle.png" />
                      <span>
                        Save time and make a lasting impact with a 2 minute
                        video
                      </span>
                    </li>
                    <li>
                      <img alt=" " src="images/check-circle.png" />
                      <span>
                        Increase your visibility and boost your referrals
                      </span>
                    </li>
                    <li>
                      <img alt=" " src="images/check-circle.png" />
                      <span>
                        Self promote as much as you want and build your brand
                        and significance at no extra cost
                      </span>
                    </li>
                    <li>
                      <img alt=" " src="images/check-circle.png" />
                      <span>
                        Connect with clients 24/7 and create success while you
                        sleep
                      </span>
                    </li>
                    <li>
                      <img alt=" " src="images/check-circle.png" />
                      <span>
                        Operate in a safe and secure space, keeping you personal
                        details private
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Link className="btn-border-round" to="register/professional">
              Make Connections
            </Link>
          </div>
        </section>
        <section className="quotes _section">
          <div className="container">
            <blockquote
              className="blockquote"
              style={{
                backgroundImage: 'url("images/quotes.png")',
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
    </>
  );
};

export default Home;
