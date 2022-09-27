import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
      loggedUser: sessionStorage.loggedUser ?? "",
   },
   reducers: {
      logIn: (state) => {
         if (!state.loggedUser) {
            state.loggedUser = prompt("Assign a name to yourself");
            sessionStorage.setItem("loggedUser", state.loggedUser);
         }
      },
   },
});

export default userSlice.reducer;
export const { logIn } = userSlice.actions;
