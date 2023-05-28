export type NetworkClient = {
  send: (message: string) => Promise<string>;
};
