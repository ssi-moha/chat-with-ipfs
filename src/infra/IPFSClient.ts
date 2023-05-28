import * as IPFS from "ipfs-core";
import { NetworkClient } from "../domain";

const NODE_NOT_INITIALIZED = "IPFS node is not initialized yet";

class IPFSClient implements NetworkClient {
  private node: IPFS.IPFS | null = null;
  private textDecoder = new TextDecoder();

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
      content: message,
    });

    return messageAdded.cid.toString();
  }

  public async getMessageFromCid(cid: string) {
    if (!this.node) {
      throw new Error(NODE_NOT_INITIALIZED);
    }

    const chunks = [];
    for await (const chunk of this.node.cat(cid)) {
      chunks.push(chunk);
    }

    const allChunks = new Uint8Array(
      chunks.reduce((acc, chunk) => acc + chunk.length, 0)
    );

    let position = 0;
    for (const chunk of chunks) {
      allChunks.set(chunk, position);
      position += chunk.length;
    }

    const message = this.textDecoder.decode(allChunks);

    return message;
  }
}

export default IPFSClient;
