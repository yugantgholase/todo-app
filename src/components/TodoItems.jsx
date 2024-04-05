import TodoItem from "./TodoItem";
import { MyContext } from "../store/TodoItemsContext.jsx";
import { useContext } from "react";

function TodoItems() {
  const { todoItems } = useContext(MyContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.todoName} item={item} />
      ))}
    </>
  );
}

export default TodoItems;
