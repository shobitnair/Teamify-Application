import React from "react";
import EventButton from "./button"
import {useHistory} from "react-router-dom"


const ConnectButtons = () => {

    let Hist = useHistory();
    //click event handlers  for the buttons
    const Join_Room = () =>{
        Hist.push("./join-room")
    }

    const Host_Room = () =>{
        Hist.push("./join-room?host=true")
    }

    return(
        <div className="button_container">
            <EventButton
            buttonText="Join a Meeting"
            onClickHandler={Join_Room}
            />
            <EventButton
            buttonText="Host a Meeting"
            onClickHandler={Host_Room}
            createRoomButton
            />
        </div>
    )
};

export default ConnectButtons;
