import { useEffect, useReducer, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
// import { getRequest, postRequest } from "./../../utils/apiRequests";
// import {
//   BASE_URL,
//   GET_CALL_ID,
//   SAVE_CALL_ID,
// } from "./../../utils/apiEndpoints";
// import io from "socket.io-client";
// import Peer from "simple-peer";
import "./CallPgae.scss";
import Messenger from "./../UI/Messenger/Messenger";
// import MessageListReducer from "../../reducers/MessageListReducer";
// import Alert from "../UI/Alert/Alert";
import MeetingInfo from "../UI/MeetingInfo/MeetingInfo";
import CallPageFooter from "../UI/CallPageFooter/CallPageFooter";
import CallPageHeader from "../UI/CallPageHeader/CallPageHeader";

const CallPage = () => {
  return (
    <div className="callpage-container">
      <video className="video-container" controls src=""></video>

      <CallPageHeader />
      <CallPageFooter />
      <MeetingInfo />
      <Messenger />
    </div>
  );
};

export default CallPage;
