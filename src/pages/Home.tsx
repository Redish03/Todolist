import { useRef, useState } from "react";
import TodoInput from "~/components/Todo/TodoInput";
import TodoList from "~/components/Todo/TodoList";
import TodoListHead from "~/components/Todo/TodoListHead";
import { TodoItem } from "~/types";

const Home = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([
    { id: 1, text: "리액트 공부하기" },
    { id: 2, text: "리액트 라이브러리 공부하기" },
  ]);

  const idRef = useRef<number>(3);
  const addTodo = (text: string) => {
    const newTodoList = [...todoList, { id: idRef.current++, text }];
    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    // === !==
    // 1 != "1"
    // [1,2,3,4] filter !== 3 => [1,2,4]
    setTodoList(newTodoList);
  };

  return (
    <>
      <TodoListHead>나만의 todo리스트</TodoListHead>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
};

export default Home;
