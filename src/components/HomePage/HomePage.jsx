import "./HomePage.scss";
import Header from "../UI/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>WORK TOGETHER. FROM ANYWHERE.™</h2>
            <p>
              Bring employees and customers together with the world's #1
              business communications platform.
            </p>
            <div className="action-btn">
              <button className="btn green">
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="#">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img
              alt="homepage"
              src="https://www.ringcentral.com/content/dam/rc-www/en_us/images/content/home-page/gradient-design/hero-girl-png-rendition.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
