type ChatInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const ChatInput = ({ value, onChange }: ChatInputProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};
