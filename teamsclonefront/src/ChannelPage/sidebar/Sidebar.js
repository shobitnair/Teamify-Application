import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Avatar, Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { Button, Grid } from "@material-ui/core";
import SidebarChat from "./SidebarChat.js";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db, auth } from "../firebase";

const Sidebar = () => {
  const user = useSelector(selectUser);

  //State management
  const [chats, setChats] = useState([]);
  const [rooms, setrooms] = useState([]);
  const [open, setOpen] = useState(false);
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
          console.log(x);
          added = true;
        }
      });
      if (!added) {
        db.collection("chats").add({
          chatName: channel,
          password: password,
          host: user.email,
        });
        alert("Channel created , Join the channel to update your Channel feed");
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
        } else alert("Channel succesfully added");
      } else alert("You are already a member of this Channel");
    } else alert("Both credentials are required");
    setOpen(false);
    setChannel("");
    setPassword("");
  };

  return (
    <>
      <div className="sidebar">

        <div className="sidebar__header">
          <div className="logout" onClick={() => auth.signOut()}>
            <Avatar src={user.photo} className="sidebar__avatar" />
            <small>Logout</small>
          </div>
          <div className="sidebar__create" onClick={(e) => setOpen(!open)}>
            <AddIcon style={{ paddingRight: "10px" }} />
          </div>
        </div>
        
        <div hidden={!open} id="channel_menu">
          <Grid container xs={12} justify="center">
            <form>
              <Grid item xs={12} justify="center">
                <TextField
                  placeholder="Channel Name"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container xs={12} justify="center">
                  <Button  onClick={addChat}>
                    Create
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container xs={12} justify="center">
                  <Button  onClick={joinChat}>
                    Join
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </div>

        <div className="sidebar__chats">
          {rooms.map(({ id, data }) => (
            <SidebarChat key={id} id={id} chatName={data.chatName} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
