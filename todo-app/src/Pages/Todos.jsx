import { useEffect, useState } from "react";
const [nuevoTodo, setNuevoTodo] = useState("");
const [loading, setLoading] = useState(true);

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

<form onSubmit={handleSubmit}>
    <input
        type="text"
        value={nuevoTodo}
        onChange={(e) => setNuevoTodo(e.target.value)}
        placeholder="Nuevo TODO"
    />
    <button type="submit">Agregar</button>
</form>

function handleSubmit(e) {
    e.preventDefault();

    if (!nuevoTodo.trim()) {
        alert("El campo no puede estar vacío");
        return;
    }

    const nuevo = {
        id: Date.now(),
        title: nuevoTodo,
        completed: false
    };

    setTodos([nuevo, ...todos]);
    setNuevoTodo("");
}


<li key={todo.id}>
  {todo.title}
  <button onClick={() => toggleComplete(todo.id)}>
    {todo.completed ? "Marcar pendiente" : "Marcar completado"}
  </button>
</li>

function toggleComplete(id) {
  setTodos(todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  ));
}

<li key={todo.id}>
  {todo.title}
  <button onClick={() => toggleComplete(todo.id)}>
    {todo.completed ? "Marcar pendiente" : "Marcar completado"}
  </button>
</li>


function toggleComplete(id) {
  setTodos(todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  ));
}

<button onClick={() => eliminar(todo.id)}>Eliminar</button>

function eliminar(id) {
  setTodos(todos.filter(t => t.id !== id));
}

useEffect(() => {
  async function loadTodos() {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  }
  loadTodos();
}, []);

if (loading) return <p>Cargando...</p>;

