import React , {useEffect} from 'react'
import './JoinRoom.css'
import { connect } from 'react-redux'
import { SetisRoomHost } from '../Store/actions'
const JoinPage = (props) => {

    const { SetisRoomHostAction , isHost } = props;
    useEffect( () =>{
        //comparator to check if the user is a host
        let currentURL = String(window.location.href);
        let isHost = currentURL.includes('host');
        //console.log(isHost)
        
        if(isHost){
            SetisRoomHostAction(true);
        }
        else{
            SetisRoomHostAction(false);
        }
    } , [])

    return (
        <div>
            
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
        SetisRoomHostAction: (isHost) =>{
            dispatch(SetisRoomHost(isHost))
        }
    }
}

export default connect(mapStoreStateToProps , mapDispatchToProps)(JoinPage)
