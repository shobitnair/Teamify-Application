import React from "react";
import Button from "./button"
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
            <Button
            buttonText="Join a Meeting"
            onClickHandler={Join_Room}
            />
            <Button
            buttonText="Host a Meeting"
            onClickHandler={Host_Room}
            createRoomButton
            />
        </div>
    )
};

export default ConnectButtons;
