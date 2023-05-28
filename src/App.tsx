import { useState } from "react";
import { useAppDispatch } from "./store/store";
import { MessageAdapter } from "./store/message/MessageAdapter";

type ChatInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ChatInput = ({ value, onChange }: ChatInputProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};

const SendButton = ({ sendMessage }: { sendMessage(): void }) => {
  return <button onClick={sendMessage}>Send</button>;
};

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
    </>
  );
}

export default App;
