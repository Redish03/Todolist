interface Props {
  children: React.ReactNode;
}

const TodoListHead = ({ children }: Props) => {
  return <div> {children} </div>;
};

export default TodoListHead;
