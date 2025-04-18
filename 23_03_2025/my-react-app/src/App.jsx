import { useState,useEffect } from "react";
import Todos from "./Todos";
import './App.css'
import Counter from "./Counter";

const App = () => {
  
  
  const API = "https://mockapi.io/clone/67dfb8a27635238f9aaa759d"
  useEffect(() => {
    console.log("triggered")
    fetch({API})
    .then(response => response.json())
    .then(data => {
      setGroups(data)
    })
  })


  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <div className="app">

      
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      </div>

      <Counter/>
    </>
  );
};

export default App