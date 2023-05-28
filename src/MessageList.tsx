import { useAppSelector } from "./store/store";
import { Message } from "./Message";

export const MessageList = () => {
  const cids = useAppSelector((state) => state.message.cids);

  return (
    <>
      {cids.map((cid) => (
        <Message cid={cid} />
      ))}
    </>
  );
};
