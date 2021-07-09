import React, { useEffect, useState } from "react";
import "./chat.css";
import Message from "./Message";
import { db } from "../firebase";
import firebase from "firebase";
import { connect } from "react-redux";
import { useRef } from "react";
import {Grid , Fab} from "@material-ui/core"
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {useHistory} from "react-router-dom"

const Chat = (props) => {
  const { user, chatName, chatId } = props;
  const chatRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  let history = useHistory();

  // on component mount fetch messages of selected room
  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
          chatRef?.current?.scrollIntoView({ behavior: "smooth" });
        });
    }
  }, [chatId]);

  const sendMessage = (e) => {
    // firebase operation - add message and info to firebase
    if(input === "")return;
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });
    // target the empty div to trigger chat scroll to last msg
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    setInput("");
  };

  const handleKeyPressed = (event) => {
    //handle enter key in computers
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat">
      <Fab id="video_action" onClick={()=>history.push('join-room?host=true')}><VideoCallIcon/></Fab>
      <Fab id="join_action" onClick={()=>history.push('join-room')}><i class="fas fa-external-link-square-alt"></i></Fab>
      <div className="chat__header">
        <div id="header_text">
          Channel <br/> <span className="chat__name">{chatName}</span>
        </div>
      </div>

      <div id="chat__messages">
        {messages.map(({ id, data }) => (
          <Message key={id} id={id} contents={data} />
        ))}

        <div ref={chatRef} />
      </div>

      {/* chat input */}
      <div>
      <Grid container xs={12} direction="row" id="message_input_block">
        <Grid item xs={10}>
          <textarea
          id="message_input"
            disabled={!chatId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPressed}
            placeholder={!chatId ? "Please select a Channel first" : "Type..."}
            type="text"
          />
        </Grid>
        <Grid item xs={1}>
            <div id="message_util" onClick={sendMessage}>
              <i class="fas fa-paper-plane"></i>
            </div>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};



const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps, null)(Chat);
