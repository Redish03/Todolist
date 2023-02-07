import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const TodoListHead = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  height: 50px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  background: linear-gradient(to bottom, #ffeda7, #94e9d7);
  border-radius: 10px;
`;

export default TodoListHead;
