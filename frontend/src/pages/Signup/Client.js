import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Client = () => {
  // function to handle the next button
  const [step, setStep] = useState(1);

  const handleNext = () => {
    // navigate to the next page
    setStep(step + 1);
  };

  // function to handle the previous button
  const handlePrevious = () => {
    // navigate to the previous page
    setStep(step - 1);
  };

  const name = "Bipin";

  const handleChange = (e) => {
    console.log(e.target.value);
    return e.target.value;
  };

  const formSubmit = (e) => {
    // Form Submission
    e.preventDefault();
  };

  return (
    <div className="get-matched-page">
      <div className="get-match-banner-image">
        <div className="container">
          <img
            className="banner-img"
            src="/images/banner.jpg"
            alt="Banner Image"
          />
        </div>
      </div>
      {/* Screen1 */}
      {step === 1 && (
        <div id="screen1" className="get-match-screen screen1">
          <div className="container">
            <h2>Welcome to Mindsetts</h2>
            <h4>
              Are you tired of feeling over-burdened by issues relating to your
              health, wealth or relationships.
            </h4>
            <p>
              Find a therapist or Coach who can help you to truly change your
              life.
            </p>
            <p className="small-texts">
              By pressing ‘Next’, our promise to you is your personal
              information will be kept safe with MindSETTS, there will be no
              follow-up ,spam or pressure to book a session.
            </p>
            <div className="next-screen-button-part row">
              <Link className="btn-next col" to="/">
                Home
              </Link>
              <a className="btn-next col" onClick={handleNext}>
                Next
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Screen1  End*/}

      <form onSubmit={formSubmit} id="get-matched-form">
        {/* Screen 2 */}
        {step === 2 && (
          <div id="screen2" className="get-match-screen screen2">
            <div className="container">
              <h2>What’s your gender?</h2>
              <div className="custom-radio-button">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    defaultValue="male"
                    id="gendarButton1"
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="gendarButton1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    defaultValue="female"
                    id="gendarButton2"
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="gendarButton2">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    defaultValue="other"
                    id="gendarButton3"
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="gendarButton3">
                    Other
                  </label>
                </div>
              </div>
              <label id="gender-error" className="error" htmlFor="gender" />
              <div className="next-screen-button-part row row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 2 End */}
        {/* Screen 3 */}
        {step === 3 && (
          <div id="screen3" className="get-match-screen screen3">
            <div className="container">
              <h2>
                What gender would you prefer your therapist, coach or
                practitioner to be?
              </h2>
              <div className="custom-radio-button">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prefer_therapist_gender"
                    defaultValue="male"
                    id="gendarTherapistButton1"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gendarTherapistButton1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prefer_therapist_gender"
                    defaultValue="female"
                    id="gendarTherapistButton2"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gendarTherapistButton2"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prefer_therapist_gender"
                    defaultValue="other"
                    id="gendarTherapistButton3"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gendarTherapistButton3"
                  >
                    Other
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="prefer_therapist_gender"
                    defaultValue="no_preference"
                    id="gendarTherapistButton3"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gendarTherapistButton3"
                  >
                    No preference
                  </label>
                </div>
              </div>
              <label
                id="prefer_therapist_gender-error"
                className="error"
                htmlFor="prefer_therapist_gender"
              />
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 3 End */}
        {/* Screen 4 Start */}
        {step === 4 && (
          <div id="screen4" className="get-match-screen screen4">
            <div className="container">
              <h2>Let’s get to know you a bit more…</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  defaultValue
                  placeholder="What’s your name"
                  required
                />
              </div>
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 4 End */}
        {/* Screen 5 Start */}
        {step === 5 && (
          <div id="screen5" className="get-match-screen screen5">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h2>
                    ‘<span className="entered_name" />
                    ’, it’s a pleasure to meet you!
                  </h2>
                  <p>Just a few more questions, then we’ll get you matched</p>
                </div>
                <div className="col-md-5">
                  <img
                    className="user-img"
                    src="http://124.123.122.137:8080/mindsetts-lv-v2/images/user-placeholder.jpg"
                    alt="User Profile"
                  />
                </div>
              </div>
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 5 End */}
        {/* Screen 6 Start */}
        {step === 6 && (
          <div id="screen6" className="get-match-screen screen6">
            <div className="container">
              <h2>What aspect of your life would you like to improve?</h2>
              <div className="custom-checkbox-button">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="like_to_improve[]"
                    defaultValue="I need to deal with stress and/or depression"
                    id="improveCheckBox1"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="improveCheckBox1"
                  >
                    I need to deal with stress and/or depression
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="like_to_improve[]"
                    defaultValue="Improve my health and wellbeing"
                    id="improveCheckBox2"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="improveCheckBox2"
                  >
                    Improve my health and wellbeing
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="like_to_improve[]"
                    defaultValue="Love myself more"
                    id="improveCheckBox3"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="improveCheckBox3"
                  >
                    Love myself more
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="like_to_improve[]"
                    defaultValue="Live with more joy"
                    id="improveCheckBox4"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="improveCheckBox4"
                  >
                    Live with more joy
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="like_to_improve[]"
                    defaultValue="Enhance my prospects"
                    id="improveCheckBox5"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="improveCheckBox5"
                  >
                    Enhance my prospects
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="like_to_improve[]"
                    defaultValue="Improve my relationships"
                    id="improveCheckBox6"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="improveCheckBox6"
                  >
                    Improve my relationships
                  </label>
                </div>
              </div>
              <label
                id="like_to_improve[]-error"
                className="error"
                htmlFor="like_to_improve[]"
              />
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 6 End */}
        {/* Screen 7 Start */}
        {step === 7 && (
          <div id="screen7" className="get-match-screen screen7">
            <div className="container">
              <h2>
                What would your life look like once you’ve overcome what’s
                holding you back?
              </h2>
              <div className="custom-checkbox-button">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="life_would_be[]"
                    defaultValue="I would be living a life on purpose"
                    id="holdingCheckBox1"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="holdingCheckBox1"
                  >
                    I would be living a life on purpose
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="life_would_be[]"
                    defaultValue="I would be making healthier choices to be the best version of me"
                    id="holdingCheckBox2"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="holdingCheckBox2"
                  >
                    I would be making healthier choices to be the best version
                    of me
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="life_would_be[]"
                    defaultValue="I would be able to jump out of bed in the morning with a spring in my step"
                    id="holdingCheckBox3"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="holdingCheckBox3"
                  >
                    I would be able to jump out of bed in the morning with a
                    spring in my step
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="life_would_be[]"
                    defaultValue="I would feel more confident, free of stress and worries"
                    id="holdingCheckBox4"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="holdingCheckBox4"
                  >
                    I would feel more confident, free of stress and worries
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="life_would_be[]"
                    defaultValue="I would be enjoying healthy, fulfilling relationships"
                    id="holdingCheckBox5"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="holdingCheckBox5"
                  >
                    I would be enjoying healthy, fulfilling relationships
                  </label>
                </div>
              </div>
              <label
                id="life_would_be[]-error"
                className="error"
                htmlFor="life_would_be[]"
              />
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 7 End */}
        {/* Screen 8 Start */}
        {step === 8 && (
          <div id="screen8" className="get-match-screen screen7">
            <div className="container">
              <h2>Let’s set up your profile:</h2>
              <div className="custom-checkbox-button">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email:"
                    defaultValue
                    required
                  />
                  <label id="email-error" className="error" htmlFor="email" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username:"
                    defaultValue
                    required
                  />
                  <label
                    id="username-error"
                    className="error"
                    htmlFor="username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password:"
                    defaultValue
                    required
                  />
                  <label
                    id="password-error"
                    className="error"
                    htmlFor="password"
                  />
                </div>
              </div>
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>
                <a className="btn-next col" onClick={handleNext}>
                  Next
                </a>
              </div>
            </div>
          </div>
        )}
        {/* Screen 8 End */}
        {/* Screen 9 Start */}
        {step === 9 && (
          <div id="screen9" className="get-match-screen screen7">
            <div className="container">
              <h2>
                ‘
                <span className="entered_name">
                  {/* Get name from state */}
                  {name}
                </span>
                ’, Welcome to Mindsetts. Let’s get you Matched!
              </h2>
              <div className="next-screen-button-part row">
                <a className="btn-next col" onClick={handlePrevious}>
                  Back
                </a>

                <input
                  type="submit"
                  className="btn-next col"
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        )}
        {/* Screen 9 End */}
      </form>
    </div>
  );
};

export default Client;
