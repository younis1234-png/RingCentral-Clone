import "./CallPageHeader.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faCommentAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const CallPageHeader = () => {
  return (
    <div className="frame-header">
      <div className="header-items icon-block">
        <FontAwesomeIcon icon={faUserFriends} className="icon" />
      </div>
      <div className="header-items icon-block">
        <FontAwesomeIcon icon={faCommentAlt} className="icon" />
        <span className="alert-circle-icon"></span>
      </div>
      <div className="header-items date-block">1:00 PM</div>
      <div className="header-items icon-block">
        <FontAwesomeIcon icon={faUserCircle} className="icon profile" />
      </div>
    </div>
  );
};

export default CallPageHeader;
