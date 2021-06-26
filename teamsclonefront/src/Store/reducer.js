//REDUx State Management.
import Actions from './actions'


const initState = {
    identity:"",
    isHost:false,
}

const reducer = (state = initState , action) => {
    switch(action.type){
        case Actions.SET_IDENTITY :
            return{
                ...state,
                identity:action.identity
            }
        case Actions.SET_IS_ROOM_HOST :
            return{
                ...state,
                isHost:action.isHost
            }
        default:
            return state;
    }
}

export default reducer