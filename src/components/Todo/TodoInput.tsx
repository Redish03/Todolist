import { useState } from "react";
import styled from "@emotion/styled";

interface Props {
  addTodo: (text: string) => void;
}

const TodoInput = ({ addTodo }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") return;

    addTodo(input);
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmitTodo}>
      <StyledInput
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="입력하세요..."
      />
      <StyledButton type="submit">만들기</StyledButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 40px;
  gap: 10px;
`;

const StyledInput = styled.input`
  padding-left: 1rem;
  width: 80%;
  height: 100%;
  border: none;
  border-bottom: 1px solid #000;
`;
const StyledButton = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #dadada;
  }
`;

export default TodoInput;
