import { createSlice } from "@reduxjs/toolkit"
import { getUser } from "../../apis/auth"

export interface User {
  id: string,
  name: string,
  email: string
}

interface UserState {
  user: User
}

const initialState: UserState = {
  user: getUser()
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer
