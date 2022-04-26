import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-page-area">
        <div
          className="testimonials-banner-section"
          style={{
            backgroundImage: 'url("images/banner.jpg")',
          }}
        >
          <div className="container">
            <h1>Join us on a Mindsett Retreat</h1>
            <p>
              Unlock your true potential with our deeply, nurturing retreats
            </p>
          </div>
        </div>
        <div className="testimonial-page-slider">
          <div className="container">
            <div className="testimonial-slider" id="TestimonialSlider">
              <div className="testimonial-block">
                <div className="person-img-part">
                  <img
                    src="images/banner.jpg"
                    className="person-image"
                    alt="Person Image"
                  />
                </div>
                <p>
                  “Mindsetts has transformed my business, I’m make connections
                  so much easier, and can finally do what I love, helping more
                  people to change their lives.”
                </p>
                <h6>Robyn Spens</h6>
              </div>
              <div className="testimonial-block">
                <div className="person-img-part">
                  <img
                    src="images/banner.jpg"
                    className="person-image"
                    alt="Person Image"
                  />
                </div>
                <p>
                  “Mindsetts has transformed my business, I’m make connections
                  so much easier, and can finally do what I love, helping more
                  people to change their lives.”
                </p>
                <h6>Robyn Spens</h6>
              </div>
              <div className="testimonial-block">
                <div className="person-img-part">
                  <img
                    src="images/banner.jpg"
                    className="person-image"
                    alt="Person Image"
                  />
                </div>
                <p>
                  “Mindsetts has transformed my business, I’m make connections
                  so much easier, and can finally do what I love, helping more
                  people to change their lives.”
                </p>
                <h6>Robyn Spens</h6>
              </div>
            </div>
          </div>
          <div></div>
          <div
            className="main-loader"
            id="main-loader"
            style={{ display: "none" }}
          >
            <div className="main-loader-inner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
