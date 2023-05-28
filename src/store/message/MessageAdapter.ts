import { createNetwork } from "../../domain/Network";
import IPFSClient from "../../infra/IPFSClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

const Network = createNetwork(new IPFSClient());

export const MessageAdapter = {
  send: createAsyncThunk("message/send", async (message: string) => {
    const cid = await Network.send(message);
    return cid;
  }),
};

export const getMessageFromCid = async (cid: string) => {
  const message = await Network.get(cid);

  return message;
};
