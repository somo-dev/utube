import { configureStore } from '@reduxjs/toolkit';
import watchLaterSlice from './watch-later';
import searchSlice from './search-slice';
import { Item } from "../utils/videoProps";

export interface StorePropsType {
   watchLater: Item[];
   search: {
      [key: string]: string[];
   }
}

export const store = configureStore({
   reducer: { watchLater: watchLaterSlice.reducer, search: searchSlice.reducer }
});