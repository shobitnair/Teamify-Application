import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setChatId, setChatName , setPage} from "../../store/actions";
import { db } from "../firebase";
import { Grid } from "@material-ui/core";

const SidebarChat = (props) => {
  const { id, chatName, setChatIdAction, setChatNameAction , setPageAction } = props;
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

  return (
    <Grid
      container
      xs={12}
      onClick={() => {
        setChatIdAction(id);
        setChatNameAction(chatName);
        setPageAction(true);
      }}
      id="channel_bar"
    >
      <Grid item xs={12} id="channel_name">
        {chatName}
      </Grid>
      <Grid item xs={12} id="last_message">
      {(chatInfo[0])?(chatInfo[0]?.displayName+ " : " + chatInfo[0]?.message):""}
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setChatIdAction: (chatId) => dispatch(setChatId(chatId)),
    setChatNameAction: (chatName) => dispatch(setChatName(chatName)),
    setPageAction: (page) => dispatch(setPage(page))
  };
};

export default connect(null, mapDispatchToProps)(SidebarChat);
