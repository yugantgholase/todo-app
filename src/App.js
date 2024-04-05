import './App.css';
import AddTodo from './components/AddTodo';
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading';
import ErrorMessage from './components/ErrorMessage';
import { useState } from 'react';
import TodoItems from './components/TodoItems';
import {MyContext} from './store/TodoItemsContext.jsx';


function App() {

  const [todoItems, setTodoItems] = useState([]);
  console.log("Rendering")

  const addItem = (todoName, todoDate) =>{
    setTodoItems((currentValue) => [...currentValue, {todoName: todoName, todoDate: todoDate}])
  }

  const deleteItem =  (todoName) => {
    setTodoItems((currentValue) => {
      let updatedItems = currentValue.filter((item) => item.todoName !== todoName);
      return updatedItems;
    });
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
