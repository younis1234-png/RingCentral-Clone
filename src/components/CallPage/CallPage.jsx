import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRequest, postRequest } from "../../utlis/apiRequests";
import { BASE_URL, GET_CALL_ID, SAVE_CALL_ID } from "../../utlis/apiEndpoints";
import io from "socket.io-client";
import Peer from "simple-peer";
import "./CallPgae.scss";
import Messenger from "./../UI/Messenger/Messenger";
import MessageListReducer from "../../reducer/MessageListReducer";
import Alert from "../UI/Alert/Alert";
import MeetingInfo from "../UI/MeetingInfo/MeetingInfo";
import CallPageFooter from "../UI/CallPageFooter/CallPageFooter";
import CallPageHeader from "../UI/CallPageHeader/CallPageHeader";

const CallPage = () => {
  let { id } = useParams();
  // console.log(id);
  const userIsAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  // console.log(userIsAdmin, url);

  const [meetInfoPopup, setMeetInfoPopup] = useState(false);

  useEffect(() => {
    if (userIsAdmin) {
      setMeetInfoPopup(true);
    }
  }, []);

  return (
    <div className="callpage-container">
      <video className="video-container" controls src=""></video>

      <CallPageHeader />
      <CallPageFooter />
      {userIsAdmin && MeetingInfo && (
        <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
      )}

      <Messenger />
    </div>
  );
};

export default CallPage;
