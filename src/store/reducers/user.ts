import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string,
  token: string,
  name: string
}


const initialState: User = {
  email: "",
  token: "",
  name: ""
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string, token: string, name: string }>) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.name = action.payload.name
    }
  }
});

export const { setUser } = user.actions;
export default user.reducer;
