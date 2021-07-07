import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Avatar, IconButton, Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import SidebarChat from "./SidebarChat.js";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db, auth } from "../firebase";

// Matrial ui modal template
const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

// Matrial ui modal template
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  const [rooms , setrooms] = useState([]);
  const [open, setOpen] = useState(false);
  const [a , sa] = useState();
  const [b , sb] = useState();

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
    if (a && b) {
      db.collection("chats").add({
        chatName: a,
        password:b,
        host:user.email,
      }); 
    }
    setOpen(false);
    sa("");
    sb("");
  };

  const joinChat = () =>{
    if(a && b){
      chats.forEach((x) =>{
        if(x.data.chatName === a && x.data.password === b){
          db.collection(user.email).add(x)
        }
      })
    }
    setOpen(false);
    sa("");
    sb("");
  }

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="modal">
            <TextField
              className="modal__input"
              placeholder="Add room name"
              value={a}
              onChange={(e) => sa(e.target.value)}
            />
            <TextField
              className="modal__input"
              placeholder="Add room name"
              value={b}
              onChange={(e) => sb(e.target.value)}
            />
            <IconButton type="submit" onClick={addChat}>
              <AddIcon />
            </IconButton>
            <IconButton type="submit" onClick={joinChat}>
              <AddIcon />
            </IconButton>
          </form>
        </div>
      </Modal>
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="logout" onClick={() => auth.signOut()}>
            <Avatar src={user.photo} className="sidebar__avatar" />
            <small>Logout</small>
          </div>
          <div className="sidebar__create" onClick={(e) => setOpen(true)}>
            <AddIcon style={{ paddingRight: "10px" }} /> Create room
          </div>
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
