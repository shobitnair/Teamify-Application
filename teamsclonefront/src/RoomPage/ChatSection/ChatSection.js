import React from "react";
import Messages from "./Messages";
import NewMessage from "./NewMessage";

const ChatSection = () => {
  return (
    <div>
      <div id="chat_header">
        MESSAGES
      </div>
      <Messages />
      <NewMessage />
    </div>
  );
};

export default ChatSection;
