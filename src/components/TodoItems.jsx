import TodoItem from "./TodoItem";

function TodoItems({ todoItems,  deleteItem }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.todoName} item={item} deleteItem={deleteItem}/>
      ))}
    </>
  );
}

export default TodoItems;
