import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../utils/videoProps";

const watchLaterSlice = createSlice({
   name: "watch-later-slice",
   initialState: [],
   reducers: {
      watchLater(state: Item[], action: {
         payload: Item;
         type: string;
      }) {
         const newVideo = action.payload;
         const existingVideo = state.find(i => i.id === newVideo.id);

         if (!existingVideo) {
            state.push({
               kind: newVideo.kind,
               etag: newVideo.etag,
               id: newVideo.id,
               snippet: newVideo.snippet,
               contentDetails: newVideo.contentDetails,
               statistics: newVideo.statistics,
            })
         } else {

         }
      },
      removeTromWatchLater(state: Item[], action: {
         payload: string;
         type: string;
      }) {
         const id = action.payload;

         state.filter(i => i.id !== id);
      }
   }
})

export const watchLaterActions = watchLaterSlice.actions;
export default watchLaterSlice;