import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import { setIsRoomHost } from '../Store/actions'
import JoinRoomTitle from './JoinRoomTitle'
import { useLocation } from "react-router-dom";

import './JoinRoom.css'

const JoinPage = (props) => {

    const { setIsRoomHostAction, isRoomHost } = props;

    const search = useLocation().search;

    useEffect(() => {
        const isRoomHost = new URLSearchParams(search).get("host");
        if (isRoomHost) {
        setIsRoomHostAction(true);
        }
    }, []);



    return (
        <div className="join_room_page_container">
            <div className="join_room_page_panel">
                <JoinRoomTitle
                isRoomHost={isRoomHost}/>
            </div>
        </div>
    )
}

const mapStoreStateToProps = (state) =>{
    return{
        ...state,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setIsRoomHostAction: (isRoomHost) =>{
            dispatch(setIsRoomHost(isRoomHost))
        }
    }
}

export default connect(mapStoreStateToProps , mapDispatchToProps)(JoinPage)
