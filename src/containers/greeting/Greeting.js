import React, {useContext, useState, useEffect} from "react";

import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
// import meCoding from "../../assets/images/me-intro.png";
import meCoding from "../../assets/images/coding.svg";
// import profileImg from "../../assets/images/profile.jpg";
import catComputer from "../../assets/lottie/catComputer";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 1800); // matches wave animation

    return () => clearTimeout(timer);
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              {/* ==================================================== */}
              {/* <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                {showProfile ? (
                  <span className="profile-container ">
                    <img
                      src={profileImg}
                      alt="Nicole Profile"
                      className="profile-pic"
                    />
                  </span>
                ) : (
                  <span className="wave-emoji">{emoji("👋")}</span>
                )}
              </h1> */}

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {/* {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )} */}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <div className="profile-container"> */}
            {/* {illustration.animated ? (
              <DisplayLottie animationData={catComputer} />
              // <DisplayLottie animationData={meCoding} />
            ) : (
              <img
                alt="Nicole Coding"
                 src={meCoding}
                // src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
            {/* <img
              alt="Nicole Coding"
              src={meCoding}
              // src={require("../../assets/images/manOnTable.svg")}
            ></img> */}
            <img
              // src={profileImg}
              src={greeting.picture}
              alt="Nicole Profile"
              className="profile-pic"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
