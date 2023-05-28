import { NetworkClient } from ".";

type NetworkType = {
  send: (message: string) => Promise<string>;
};

export function createNetwork(client: NetworkClient): NetworkType {
  return {
    send: (message: string) => {
      const cid = client.send(message);
      return cid;
    },
  };
}
