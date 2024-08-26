import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface AuthStateType {
  APP_MODE: 'Company' | 'Candidate';
}

const initialState: AuthStateType = {
  APP_MODE: 'Candidate',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppMode: (state, action: PayloadAction<any>) => {
      state.APP_MODE = action.payload;
    },
  },
});

export const {setAppMode} = appSlice.actions;

export default appSlice.reducer;
