import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setChatId , setChatName } from "../../store/actions"
import { db } from "../firebase";
import "./sidebarChat.css";


const SidebarChat = (props) => {

  const {id , chatName , setChatIdAction , setChatNameAction} = props;
  const [chatInfo, setChatInfo] = useState("");
  
  // on component mount fetch room by id and get its messages
  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  console.log(chatInfo[0]);
  return (
    <div
      onClick={() => {
        setChatIdAction(id);
        setChatNameAction(chatName);
      }}
      className="sidebarChat"
    >
      <div id="channel_bar">
        <div id="channel_name">{chatName}</div>
        <div id="last_message">{chatInfo[0]?.message}</div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    setChatIdAction: (chatId) => dispatch(setChatId(chatId)),
    setChatNameAction: (chatName) => dispatch(setChatName(chatName))
  };
};

export default connect(null, mapDispatchToProps)(SidebarChat);
