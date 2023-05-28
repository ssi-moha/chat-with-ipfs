import { useEffect, useState } from "react";
import { getMessageFromCid } from "./store/message/MessageAdapter";

type Props = {
  cid: string;
};

export const Message = ({ cid }: Props) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getMessage() {
      const ret = await getMessageFromCid(cid);
      setMessage(ret);
    }
    getMessage();
  }, [cid]);

  return <div>{message}</div>;
};
