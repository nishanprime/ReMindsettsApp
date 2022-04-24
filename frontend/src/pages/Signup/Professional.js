import React from "react";
import { Footer } from "../../component";
import MainLayout from "../../layouts/MainLayout";

const Professional = () => {
  return (
    <MainLayout>
      <div className="professional-signup-area">
        <div className="professional-signup-section">
          <div className="container">
            <h2>START CONNECTING TO CLIENTS</h2>
            <h6>
              Choose the right clients in a safe and confidential space: Simply
              register, record your video, and relax.
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
      <div className="main-loader" id="main-loader" style={{ display: "none" }}>
        <div className="main-loader-inner" />
      </div>
    </MainLayout>
  );
};

export default Professional;
