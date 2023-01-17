import { useState } from "react";
import TodoList from "./TodoList";
import TodoListHead from "./TodoListHead";
import { TodoItem } from "./types";

const App = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([
    { title: "리액트 공부하기" },
    { title: "리액트 라이브러리 공부하기" },
  ]);

  const handleCreateTodo = () => {
    const newTodoList = [...todoList, { title: "새로운 투두" }]; //todoList전체를 불러오고, 새로운 투두를 추가시킨다.
    setTodoList(newTodoList);
  };

  return (
    <>
      <TodoListHead>성우의 투두리스트</TodoListHead>
      <TodoList todoList={todoList} />
      <button onClick={handleCreateTodo}>만들기</button>
    </>
  );
};

export default App;
