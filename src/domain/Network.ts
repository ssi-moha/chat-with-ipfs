import { NetworkClient } from ".";

export type NetworkType = {
  send: (message: string) => Promise<string>;
  get: (cid: string) => Promise<string>;
};

export function createNetwork(client: NetworkClient): NetworkType {
  return {
    send: (message: string) => {
      const cid = client.send(message);
      return cid;
    },
    get: async (cid: string) => {
        const message = await client.getMessageFromCid(cid);
        return message;
    }
  };
}
