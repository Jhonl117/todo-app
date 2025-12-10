import { useEffect, useState } from "react";

export default function Todos() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div>
    <h1>Listado de TODOS</h1>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title} - {todo.completed ? "✔" : "❌"}
        </li>
      ))}
    </ul>
  </div>
  );
}
