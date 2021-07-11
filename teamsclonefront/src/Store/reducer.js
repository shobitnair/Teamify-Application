import Actions from "./actions";

const initState = {
  identity: "",
  isRoomHost: false,
  roomId: null,
  twilioAccessToken: null,
  showOverlay: true,
  participants: [],
  messages: [],
  user:"",
  chatId: "",
  chatName: "",
  page:false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case Actions.SET_TWILIO_ACCESS_TOKEN:
      return {
        ...state,
        twilioAccessToken: action.token,
      };
    case Actions.SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: action.showOverlay,
      };
    case Actions.SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      };
    case Actions.SET_MESSAGES :
      return{
        ...state,
        messages: action.messages,
      }
    case Actions.SET_USER :
      return{
        ...state,
        user: action.user,
      }
    case Actions.SET_CHATID :
      return{
        ...state,
        chatId: action.chatId,
      }
    case Actions.SET_CHATNAME :
      return{
        ...state,
        chatName: action.chatName,
      }
    case Actions.SET_PAGE :
      return{
        ...state,
        page: action.page
      }
    
    default:
      return state;
  }
};


export default reducer;
