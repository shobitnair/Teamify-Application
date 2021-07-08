import React, { useEffect, useState } from "react";
import "./chat.css";
import Message from "./Message";
import { db } from "../firebase";
import firebase from "firebase";
import { connect } from "react-redux";
import { useRef } from "react";

const Chat = (props) => {
  const { user, chatName, chatId } = props;
  const chatRef = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

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
    e.preventDefault();
    // firebase operation - add message and info to firebase
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

  return (
    <div className="chat">
      {/* Chat header */}
      <div className="chat__header">
        <h4>
          Room: <span className="chat__name">{chatName}</span>
        </h4>
      </div>

      <div className="chat__messages">
        {messages.map(({ id, data }) => (
          <Message key={id} id={id} contents={data} />
        ))}

        <div ref={chatRef} />
      </div>

      {/* chat input */}
      <div className="chat__input">
        <form>
          <input
            disabled={!chatId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={!chatId ? "Please select a room first" : "Type..."}
            type="text"
          />
          <button onClick={sendMessage}></button>
        </form>
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
