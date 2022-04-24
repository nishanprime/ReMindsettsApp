import React from "react";
import MainLayout from "../../layouts/MainLayout";

const Signin = () => {
  return (
    <MainLayout>
      <div className="sign-in-page">
        <div className="sign-in-form-section">
          <div className="container">
            <h2>
              Welcome to Mindsetts! Find the perfect Therapist or Coach for You.
            </h2>
            <h4>FREE to join.</h4>
            <p>
              At MindSETTS, our promise to you is your personal information will
              be kept safe and completely confidential, there will be no
              follow-up ,spam or pressure to book a session.
            </p>
            <form
              action="http://124.123.122.137:8080/mindsetts-lv-v2/sign-in"
              method="POST"
              id="sign-in"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="p4gLL9gU20elXZfoviUNA94Zig15QIkl5NR8iiBL"
              />
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email:"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  defaultValue
                  placeholder="Password:"
                  required
                />
              </div>
              <div className="signin-button-part">
                <input
                  type="submit"
                  className="signin-button"
                  defaultValue="Sign In"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="main-loader" id="main-loader" style={{ display: "none" }}>
        <div className="main-loader-inner" />
      </div>
    </MainLayout>
  );
};

export default Signin;
