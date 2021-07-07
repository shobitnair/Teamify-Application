import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import userReducer from "../ChannelPage/features/userSlice";
import chatReducer from '../ChannelPage/features/chatSlice';

export const store = configureStore({
  reducer: {
    reducer:reducer,
    user: userReducer,
    chat: chatReducer
  },
});
