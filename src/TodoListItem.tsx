import { TodoItem } from "./types";

interface Props {
  todoItem: TodoItem;
}

const TodoListItem = ({ todoItem }: Props) => {
  return <div>{todoItem.title}</div>;
};

export default TodoListItem;
