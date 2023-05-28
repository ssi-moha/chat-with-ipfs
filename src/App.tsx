import { useState } from "react";
import { useAppDispatch } from "./store/store";
import {
  MessageAdapter,
} from "./store/message/MessageAdapter";
import { ChatInput } from "./ChatInput";
import { SendButton } from "./SendButton";
import { MessageList } from "./MessageList";

function App() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
    dispatch(MessageAdapter.send(inputValue));
  };

  return (
    <>
      <ChatInput onChange={handleInputChange} value={inputValue} />
      <SendButton sendMessage={sendMessage} />
      <MessageList />
    </>
  );
}

export default App;
