import {createSlice, configureStore} from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'counter',
  initialState: {
    login: false,
    detials: {},
  },
  reducers: {
    LOGIN(state, action) {
      const {detials} = action.payload;
      state.detials = detials;
      state.login = true;
    },
    LOGOUT(state, action) {
      state.detials = {};
      state.login = false;
    },
  },
});

export const {LOGIN, LOGOUT} = LoginSlice.actions;

export const store = configureStore({
  reducer: {
    Login: LoginSlice.reducer,
  },
});
