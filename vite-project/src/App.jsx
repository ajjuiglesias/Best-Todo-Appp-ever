import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  function addItem(e) {
    if (e) {
      e.preventDefault();
      if (task === "") {
        alert("Enter a task first");
      } else {
        setTodos([...todos, task]);
        setTask("");
      }
    } else {
      setTodos([...todos]);
    }
  }

  function deleteItem(index) {
    todos.splice(index, 1);
    addItem();
  }

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <h1>Best TODO App Ever </h1>
        <input
          type="text"
          placeholder="write a todo..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />

        <button type="submit"> Add Item </button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div>
              <li>{todo}</li>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App
