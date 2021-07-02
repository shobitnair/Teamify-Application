import React , {useState} from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {Button } from "@material-ui/core"
import {LightTooltip} from "./Tooltip"

//toast notify utility
toast.configure();

const ShareLinkButton = (props) => {

    const {roomId} = props;

    //notification state.
    const [notif , setNotif] = useState(false);
    //timeout to prevent notification overlap when called many times.
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const notify = async() =>{
        alert(String(roomId))
        if(notif)return;
        setNotif(true);
        console.log(notif)
        toast.dark("Meeting ID copied to clipboard" , {
        position: "bottom-left",
        autoClose: 1400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        await timeout(1500);
        setNotif(false)
    }
    return (
        <LightTooltip title="Copy Room ID to clipboard">
            <CopyToClipboard text={String(roomId)}>
            <Button id="other_bt"
            onClick={notify}>
                <i class="fas fa-share-alt"></i>
            </Button>
            </CopyToClipboard>
        </LightTooltip>

    )
}

export default ShareLinkButton
