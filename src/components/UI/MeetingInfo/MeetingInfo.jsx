import "./MeetingInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faTimes,
  faUser,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const MeetingInfo = (props) => {
  const { url, setMeetInfoPopup } = props;

  return (
    <div className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your Meeting's ready</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setMeetInfoPopup(false);
          }}
        />
      </div>
      <button className="add-people-btn">
        <FontAwesomeIcon className="icon" icon={faUser} />
        App Others
      </button>
      <p className="info-text">
        Or share this meeting link with others you want in the meeting
      </p>
      <div className="meet-link">
        <span>{url}</span>
        <FontAwesomeIcon
          icon={faCopy}
          className="icon"
          onClick={() => navigator.clipboard.writeText(url)}
          onClick={() => setMeetInfoPopup(false)}
        />
      </div>
      <div className="permission-text">
        <FontAwesomeIcon className="icon" icon={faShieldAlt} />
        <p className="small=text">
          People who use this meeting link must get your permission before they
          can join.
        </p>
      </div>
      <p className="small-text">Joined as YOUNISS.SALEH@GMAIL.COM</p>
    </div>
  );
};

export default MeetingInfo;
