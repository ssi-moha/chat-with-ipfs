import { useState } from "react";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
};

const SendButton = () => {
  return <button>Send</button>;
};

function App() {
  return (
    <>
      <ChatInput />
      <SendButton />
    </>
  );
}

export default App;
