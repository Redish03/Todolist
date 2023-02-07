import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const TodoInput = ({ addTodo }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === null) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">만들기</button>
    </form>
  );
};

export default TodoInput;
