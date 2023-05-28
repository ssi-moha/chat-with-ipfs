export type NetworkClient = {
  send: (message: string) => Promise<string>;
  getMessageFromCid: (cid: string) => Promise<string>;
};
