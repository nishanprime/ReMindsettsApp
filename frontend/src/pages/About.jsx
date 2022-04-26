import React from "react";

const About = () => {
  return (
    <>
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
                  src="images/banner.jpg"
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
              To help people take control of their health, wealth, relationships
              and lives. How? By connecting incredible therapists with the right
              clients in one safe space, to make real change.
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
              connect those invested in helping others with the people that need
              their help.
            </p>
            <p>
              There is a whole world of people out there living in the shadow of
              who they can actually be.
            </p>
            <div className="founder-avtar-part">
              <div className="avtar-block">
                <img
                  className="founder-avtar"
                  src="images/banner.jpg"
                  alt="Tina"
                />
                <h6>Tina</h6>
              </div>
              <div className="avtar-block">
                <img
                  className="founder-avtar"
                  src="images/user-placeholder.jpg"
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
              What degree of freedom would you have if your business was working
              for you?
            </h2>
            <p>
              This is a really important question, and perhaps one of our
              earliest thoughts and motivations for creating Mindsetts.
            </p>
            <p>
              We are two therapists, grounded in the self development and
              knowledge industry, striving for growth. We created Mindsetts out
              of a mission to help support therapists and coaches become masters
              of their craft and enjoy the quality of life they crave.
            </p>
            <p>
              We know first hand how hard it is to find the perfect client and
              how lost you can become once the business of marketing and self
              promotion begins.
            </p>
            <p>
              Where you are right now doesn’t need to be forever! We want to
              help people like you make an impact because we know how difficult
              that is, and yet how incredibly talented you are.
            </p>
            <p>
              We have seen so many talented, enthusiastic therapists and coaches
              fail to thrive.
            </p>
            <p>
              So many of our colleagues are great at doing the work, but are not
              good at selling the great work they do. We know if people could
              only meet them, they would jump at the opportunity to work with
              them.
            </p>
            <p>
              <b>All change begins with Mindsetts.</b>
            </p>
          </div>
        </div>
        <div className="about-single-image-section">
          <img src="images/banner.jpg" alt="Background Full Image" />
        </div>
        <div className="about-client-words">
          <div className="container">
            <h2>All Change Begins with the Mind</h2>
            <p>
              “I’m a firm believer in practicing what I preach, RTT transformed
              my life in a myriad of different ways. Before I discovered the
              Marisa Peer method, I had a 20-year career in investment banking,
              but RTT showed me the direction I really wanted to take with my
              life. Despite having a successful career, it felt as though my
              life was missing direction, that direction was found when I
              discovered my true passion, helping other people transform their
              lives in the way Marisa Peer’s teachings transformed mine.
            </p>
            <p>
              Rapid Transformational Therapy didn’t just improve my professional
              life, it led me into an amazing new relationship and allowed me to
              live healthier, happier and see the worth in investing in my
              holistic wellbeing. After one RTT session, I was able to safely
              lose three stone, but the biggest difference I noticed wasn’t at
              my feet when I looked at the scales, it was in my confidence,
              relationships and self-worth.”
            </p>
            <h6>Tina x</h6>
          </div>
        </div>
      </div>
      <div className="main-loader" id="main-loader" style={{ display: "none" }}>
        <div className="main-loader-inner" />
      </div>
    </>
  );
};
export default About;
