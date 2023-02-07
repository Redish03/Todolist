import TodoListItem from "./TodoListItem";
import { TodoItem } from "~/types";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  todoList: TodoItem[];
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todoList, deleteTodo }: Props) => {
  return (
    <Container>
      <AnimatePresence mode="popLayout">
        {todoList.map((todoItem) => {
          return (
            <motion.div
              key={todoItem.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              layout
            >
              <TodoListItem todoItem={todoItem} deleteTodo={deleteTodo} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
`;

export default TodoList;
