import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import SidebarChat from "./SidebarChat.js";
import { db, auth } from "../firebase";
import { setChatId, setChatName } from "../../store/actions";
import { connect } from "react-redux";
import { Collapse , Button  ,Grid , Avatar } from "@material-ui/core";
import { LightTooltip } from "../../RoomPage/VideoSection/VideoDock/Tooltip";
import FlipMove from "react-flip-move";
import { Flip } from "react-toastify";

const Sidebar = (props) => {
  const { user, setChatIdAction, setChatNameAction } = props;
  //State management
  const [chats, setChats] = useState([]);
  const [rooms, setrooms] = useState([]);
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [channel, setChannel] = useState("");
  const [password, setPassword] = useState("");

  // on component mount fetch chat rooms names
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    db.collection(user.email).onSnapshot((snapshot) =>
      setrooms(
        snapshot.docs.map((doc) => ({
          id: doc.data().id,
          data: doc.data().data,
        }))
      )
    );
  }, []);

  const addChat = () => {
    // add new chat to firebase
    if (channel && password) {
      let added = false;
      chats.forEach((x) => {
        if (x.data.chatName === channel) {
          added = true;
        }
      });
      if (!added) {
        db.collection("chats").add({
          chatName: channel,
          password: password,
          host: user.email,
        });
        alert("Channel created , Join the channel to add it to your Channel feed");
      } else alert("This Channel Name already exists");
    } else alert("Both credentials are required");
    setOpen(false);
    setChannel("");
    setPassword("");
  };

  const joinChat = () => {
    let joined = false;
    if (channel && password) {
      rooms.forEach((x) => {
        if (x.data.chatName === channel) {
          joined = true;
        }
      });
      if (!joined) {
        chats.forEach((x) => {
          if (
            !joined &&
            x.data.chatName === channel &&
            x.data.password === password
          ) {
            db.collection(user.email).add(x);
            joined = true;
          }
        });
        if (!joined) {
          alert("Invalid Channel Credentials");
        }
      } else alert("You are already a member of this Channel");
    } else alert("Both credentials are required");
    setOpen(false);
    setChannel("");
    setPassword("");
  };

  const logOut = () => {
    //Clear local user channel states before logout.
    setChatIdAction("");
    setChatNameAction("");
    auth.signOut();
  };

  return (
    <>
      <div id="sidebar">
        <div id="sidebar__header">
          <div onClick={logOut}>
            <Avatar src={user.photo} />
            <small type="submit">Logout</small>
          </div>
          <LightTooltip title="Join / Create Room">
            <div
              id="sidebar__create"
              onClick={(e) => {
                setOpen(!open);
                setOpened(true);
              }}
            >
              <AddIcon />
            </div>
          </LightTooltip>
        </div>
        
        {/** Hidden Menu triggered when "+" is clicked */}
        <Collapse hidden={!opened} in={open} id="channel_menu">
          <Grid container xs={12} justify="center" direction="row">

            {/**Input to enter Channel name */}
            <Grid item xs={12} justify="center">
              <input
                id="sidebar_input"
                placeholder="Channel Name"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
              />
            </Grid>

            {/**Input to enter password */}
            <Grid item xs={12}>
              <input
                id="sidebar_input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            {/**Create channel button */}
            <Grid item xs={12}>
              <Grid container xs={12} justify="center">
                <Button onClick={addChat} id="sidebar_bt">
                  Create
                </Button>
              </Grid>
            </Grid>

            {/**Join channel button */}
            <Grid item xs={12}>
              <Grid container xs={12} justify="center">
                <Button onClick={joinChat} id="sidebar_bt">
                  Join
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Collapse>

        <div className="sidebar__chats">
          <div id="channel_header">Your Channels</div>
          <FlipMove>
          {rooms.map(({ id, data , index }) => (
            <div id={index}>
              <SidebarChat key={id} id={id} chatName={data.chatName} />
            </div>
          ))}
          </FlipMove>
        </div>
      </div>
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setChatIdAction: (chatId) => dispatch(setChatId(chatId)),
    setChatNameAction: (chatName) => dispatch(setChatName(chatName)),
  };
};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Sidebar);
