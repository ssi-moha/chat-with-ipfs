type Props = {
  sendMessage(): void;
};

export const SendButton = ({ sendMessage }: Props) => {
  return <button onClick={sendMessage}>Send</button>;
};
