import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string,
  token: string
}


const initialState: User = {
  email: "",
  token: ""
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string, token: string }>) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
    }
  }
});

export const { setUser } = user.actions;
export default user.reducer;
