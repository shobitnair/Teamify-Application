import React from "react";
import Messages from "./Messages";
import NewMessage from "./NewMessage";
import {Grid} from "@material-ui/core"

const ChatSection = () => {
  return (
    <>
      <Grid item md={12} id="chat_header">
          MESSAGES
      </Grid>
      <Grid item md={12} id="chat_bubble_block">
        <Messages></Messages>
      </Grid>
      <Grid item md={12} id="chat_input_block">
        <NewMessage></NewMessage>
      </Grid>
    </>
  );
};

export default ChatSection;
