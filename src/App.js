import './App.css';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading';
import ErrorMessage from './components/ErrorMessage';
import { useReducer } from 'react';
import TodoItems from './components/TodoItems';
import {MyContext} from './store/TodoItemsContext.jsx';

const reducer = (currentTodoItems, action) =>{
  let newItems = currentTodoItems;

  if(action.type === "ADD"){
    newItems = [...newItems, {todoName: action.payload.todoName, todoDate: action.payload.todoDate} ]
  }else if(action.type === "DELETE"){
    newItems = newItems.filter((item) => item.todoName !== action.payload.todoName)
  }

  return newItems;
}


function App() {

  //const [todoItems, setTodoItems] = useState([]);

  //similar to useState hook. but here we can have custom state logic.
  const [todoItems, dispatch] = useReducer(reducer, []);
  console.log("Rendering")

  const addItem = (todoName, todoDate) =>{
    dispatch(
      {
        type : "ADD",
        payload : {todoName, todoDate}
      }
    )
  }

  const deleteItem =  (todoName) => {
    dispatch(
      {
        type : "DELETE",
        payload : {todoName}
      }
    )
  }
  return (
    <>
    <MyContext.Provider value={{todoItems, addItem, deleteItem}}>
    <center>
    <Heading />
    <AddTodo addItem = {addItem}/>
    {todoItems.length === 0 && <ErrorMessage /> }
    <TodoItems deleteItem ={deleteItem}/>
    </center>
    </MyContext.Provider>
    </>
  );
}

export default App;
