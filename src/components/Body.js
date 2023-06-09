import React from "react";
import tyler from "../images/tyler-group.jpg";
import linked from "../images/linkedin.png";
import email from "../images/email.png";

export default function Body() {
  return (
    <div className="full">
      <div className="container-card">
        <div className="header">
          <img className="photo" src={tyler} alt="" width="100%" />
          <h1 className="tyler">Tyler Durnion</h1>
          <h3>Web Developer</h3>
          <p>
            <a href="https://portfolio-tylerdurnion.netlify.app/">
              portfolio-tylerdurnion.netlify.app.
            </a>
          </p>
          <div className="button-container">
          <button className="email-button">
            <a className="button-text" href="mailto:td665@pm.me" target="_blank" rel="noreferrer">
              <img src={email} alt="email" width="24px" />
              Email
            </a>
          </button>
          <button className="linkedin-button">
            <a className="button-text"
              href="https://www.linkedin.com/in/tylerdurnion/"
              target="_blank"
              rel="noreferrer"
            ><img src={linked} alt="in" width="30px" />
              LinkedIn
            </a>
          </button>
          </div>
        </div>
        <div className="text">
          <h1>About</h1>
          <p>
            I am a back-end developer looking to broaden my horizons and learn
            more about the front-end, Javascript, React and anything I can get
            my hands on really. I enjoy building websites and apps that have
            meaning to me and my clients. I am always looking to learn.
          </p><br />< br />
          <h1>Interests</h1>
          <p>
            Guitar is my main passion. I love carpentry, cooking, reading. Savy
            language learner speaking French, Spanish and a little bit of
            Arabic. Love to travel, cycle and meet new people.
          </p>
        </div>
        <p className="footer">Developed by Tyler / Using React-app</p>
      </div>
    </div>
  );
}
