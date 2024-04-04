import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { targetingReducer } from './Reduxfile/targeting';

const rootReducer = combineReducers({
  targeting: targetingReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
