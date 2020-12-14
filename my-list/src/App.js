import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {useDispatch, useSelector} from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state=> state.todos);
  const handleClick = id=> dispatch({
    type: 'DELETE_TODO',
    payload:id,

  })
  if(!todos || !todos.length){
    return <p>NO TODOS</p>
  }
  return(
    <ul>
      {todos.map(todo =><li onClick={()=>handleClick(todo)}>{todo.label}</li>)}
    </ul>
  )
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  // a handle change function to set the new value as the user change the input value
  const handleChange = event =>setNewTodo(event.target.value);
  // add a handle click handler
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload:{
      label:newTodo,
      id: Math.ceil(Math.random() * 100),
    }
  })
  return(
    <>
    <input value={newTodo} onChange={handleChange} type="text"/>
    <button onClick={handleClick}>ADD TODO</button>
    </>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODOS</p>
        <Todos/>
        <TodoInput/>
      </header>
    </div>
  );
}

export default App;
