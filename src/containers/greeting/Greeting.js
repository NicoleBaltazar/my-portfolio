import React, {useContext, useState, useEffect} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [setShowProfile] = useState(false);

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
              <div className="greeting-image-div">
                <img
                  src={greeting.picture}
                  alt="Nicole Profile"
                  className="greeting-image-div profile-pic"
                />
              </div>

              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              {/* <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p> */}
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
                dangerouslySetInnerHTML={{__html: greeting.subTitle}}
              ></p>
              {/* <div id="resume" className="empty-div"></div> */}
              <SocialMedia />

              <div className="greeting-buttons-div">
                <Button text="Contact me" href="#contact" />
                <Button text="Resume" href="#contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
