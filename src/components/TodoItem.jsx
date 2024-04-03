import styles from "../styles/TodoItem.module.css";

function TodoItem({ item, deleteItem }) {
  return (
    <>
      <div className={`${styles.item} container text-center`}>
        <div className="row">
          <div className="col">{item.todoName}</div>
          <div className="col">{item.todoDate}</div>
          <div className="col">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteItem(item.todoName);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
