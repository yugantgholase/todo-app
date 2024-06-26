import { useContext } from "react";
import { useRef } from "react";
import styles from "../styles/AddTodo.module.css";
import { MyContext } from "../store/TodoItemsContext.jsx";

function AddTodo() {
  const { addItem } = useContext(MyContext);
  const todoName = useRef();
  const todoDate = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(todoName.current.value + " " + todoDate.current.value);
    addItem(todoName.current.value, todoDate.current.value);
    todoName.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <>
      <form className={styles.Form} onSubmit={handleSubmit} action="">
        <div>
          <label className={styles.Label}>Enter Todo Item: </label>
          <input
            className={styles.Input}
            type="text"
            placeholder="Enter todo item here"
            ref={todoName}
            id="input"
            required
          ></input>
        </div>

        <div>
          <label className={styles.Label}>Enter Date: </label>
          <input
            className={styles.Input}
            type="date"
            ref={todoDate}
            required
          ></input>
        </div>

        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
