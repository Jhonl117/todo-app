import { useEffect, useState } from "react";
const [nuevoTodo, setNuevoTodo] = useState("");
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
