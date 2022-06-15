import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
}

const Globalstate = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    createUser: (state, {payload}) =>{
        state.currentUser = payload
    },
    signOut:(state) => {
        state.currentUser = null;
    }
  }
});

export const {createUser,signOut} = Globalstate.actions

export default Globalstate.reducer