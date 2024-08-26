import {configureStore} from '@reduxjs/toolkit';
import appReducer from './features/app/appSlice/index';
import {createLogger} from 'redux-logger';

const logger = createLogger({});

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
