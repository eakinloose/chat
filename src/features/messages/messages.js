import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
   name: "messages",
   initialState: {
      messages: JSON.parse(localStorage.getItem("msgs")) ?? [],
   },
   reducers: {
      sendMessage: (state, action) => {
         state.messages.push(action.payload);
         localStorage.setItem("msgs", JSON.stringify(state.messages));
      },
      updateMessages: (state) => {
         state.messages = JSON.parse(localStorage.getItem("msgs")) ?? [];
      },
   },
});

export default messagesSlice.reducer;
export const { sendMessage, updateMessages } = messagesSlice.actions;
