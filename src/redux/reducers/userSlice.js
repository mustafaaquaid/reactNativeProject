import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'null',
  age: 'null',
  id: 'null',
  counter: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
        state.name = action.payload.name;
        state.age = action.payload.age;
        state.id = action.payload.id;
        state.counter = action.payload.counter;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions

export default userSlice.reducer