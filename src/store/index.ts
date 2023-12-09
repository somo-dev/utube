import { configureStore } from '@reduxjs/toolkit';
import watchLaterSlice from './liked-videos';

export const store = configureStore({
   reducer: { watchLater: watchLaterSlice.reducer }
});