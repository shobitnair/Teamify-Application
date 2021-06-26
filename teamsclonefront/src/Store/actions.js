const Actions = {
    SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
    SET_IDENTITY: 'SET_IDENTITY',
}


//Helper action functions for reducers (REDUX STATE MANAGEMENT)

export const setIdentity = (identity) => {
    return{
        type: Actions.SET_IDENTITY , 
        identity: identity,
    }
}

export const SetisRoomHost = (isHost) =>{
    return{
        type: Actions.SET_IDENTITY , 
        isHost: isHost,
    }
}

export default Actions