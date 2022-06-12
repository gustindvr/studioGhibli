import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// reducers
import people from './slices/peoples';

export const store = configureStore({
  reducer: {
    people,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
