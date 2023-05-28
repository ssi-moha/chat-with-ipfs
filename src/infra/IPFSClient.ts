import * as IPFS from "ipfs-core";
import { NetworkClient } from "../domain";

const NODE_NOT_INITIALIZED = "IPFS node is not initialized yet";

class IPFSClient implements NetworkClient {
  private node: IPFS.IPFS | null = null;
  private textEncoder = new TextEncoder();

  constructor() {
    this.initialize();
  }

  private async initialize() {
    this.node = await IPFS.create();
  }

  public async send(message: string) {
    if (!this.node) {
      throw new Error(NODE_NOT_INITIALIZED);
    }

    const messageAdded = await this.node.add({
      path: "message",
      content: this.textEncoder.encode(message),
    });

    return messageAdded.cid.toString();
  }
}

export default IPFSClient;
