import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/auth"
import messageReducer from "../features/messages/messages"

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
  }
})

export default store;