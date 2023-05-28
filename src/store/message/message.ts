import { createSlice } from "@reduxjs/toolkit";
import { MessageAdapter } from "./MessageAdapter";

type MessageState = {
  cids: string[];
};

const initialState: MessageState = {
  cids: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(MessageAdapter.send.fulfilled, (state, action) => {
      state.cids.push(action.payload);
    });
  },
});

export const messageReducer = messageSlice.reducer;
