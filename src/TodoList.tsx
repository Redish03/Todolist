import { TodoItem } from "./types";
import TodoListItem from "./TodoListItem";

interface Props {
  todoList: TodoItem[];
}

const TodoList = ({ todoList }: Props) => {
  return (
    <div>
      {todoList.map((todoItem, index) => {
        return <TodoListItem key={index} todoItem={todoItem} />;
      })}
    </div>
  );
};

export default TodoList;
