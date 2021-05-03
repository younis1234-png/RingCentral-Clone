import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://www.ringcentral.com/content/dam/ringcentral/images/whyringcentral/kit/kit4.png"
          alt=""
        />
        <span className="help-text"></span>
      </div>
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
    </div>
  );
};

export default Header;
