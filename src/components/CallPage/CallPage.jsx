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
  const history = useHistory();
  let { id } = useParams();
  const userIsAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  let alertTimeout = null;

  let peer = null;
  const socket = io.connect("http://localhost:1111");

  const initialState = [];
  const [messageList, messageListReducer] = useReducer(
    MessageListReducer,
    initialState
  );

  const [streamObj, setStreamObj] = useState();
  const [screenCastStream, setScreenCastStream] = useState();
  const [meetInfoPopup, setMeetInfoPopup] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isMessenger, setIsMessenger] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});
  const [isAudio, setIsAudio] = useState(true);

  useEffect(() => {
    if (userIsAdmin) {
      setMeetInfoPopup(true);
    }

    initWebRtc();

    socket.on("code", (data) => {
      peer.signal(data);
      console.log(data);
    });
  }, []);

  const getRecieverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      peer.signal(response.code);
    }
  };

  const initWebRtc = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        peer = new Peer({
          initiator: userIsAdmin,
          trickle: false,
          stream: stream,
        });

        if (!userIsAdmin) {
          getRecieverCode();
        }

        peer.on("signal", async (data) => {
          if (userIsAdmin) {
            let payload = {
              id,
              signalData: data,
            };
            await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
          } else {
            //socket event later
            socket.emit("code", data, (cdData) => {
              console.log("code send");
            });
          }
        });

        peer.on("stream", (stream) => {
          // got remote video stream, now let's show it in a video tag
          let video = document.querySelector("video");

          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream); // for older browsers
          }

          video.play();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
