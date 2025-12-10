# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Todo App – React + Vite

Aplicación creada como parte de la actividad de *Navegación, formularios y consumo de datos en React*.  
Incluye navegación entre rutas, manejo de formularios controlados, estados, consumo de API REST y acciones sobre tareas.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM v6
- Fetch API
- JavaScript ES6+

---

## 🧭 Rutas implementadas

| Ruta       | Descripción |
|------------|-------------|
| `/`        | Página de inicio |
| `/todos`   | Listado de todos + formulario + acciones |
| `/registro`| Vista de formulario de registro simple |

---

## 📌 Funcionalidades desarrolladas

### ✔ **Navegación entre páginas**  
Implementada con `react-router-dom`.

### ✔ **Listar todos desde una API externa**  
Se obtienen los datos desde  
`https://jsonplaceholder.typicode.com/todos`

### ✔ **Crear nuevos todos**  
Formulario controlado con validación básica.

### ✔ **Marcar como completado / pendiente**  
Cambio dinámico del estado sin recargar página.

### ✔ **Eliminar todos**  
Botón para eliminar tareas individualmente.

### ✔ **Estados de carga (loading)**  
Spinner o texto mientras se obtienen los datos de la API.

### ✔ **Manejo básico de errores**  
try/catch para capturar errores en fetch.

### ✔ **Código modular**  
La lógica fue separada en:


components/
├─ FormNuevoTodo.jsx
├─ TodoList.jsx
├─ TodoItem.jsx

pages/
├─ Home.jsx
├─ Todos.jsx
├─ Registro.jsx


---

## 🛠️ Instalación y ejecución

```bash
git clone https://github.com/Jhonl117/todo-app.git
cd todo-app
npm install
npm run dev


Abrir en el navegador:

http://localhost:5173/

## Commits realizados

1. feat: creación de estructura inicial con rutas /, /todos y /registro

2. feat: componente Todos.jsx con fetch inicial usando useEffect

3. feat: implementación de listado de todos desde API

4. feat: formulario para crear nuevos todos con validación básica

5. feat: función para marcar todos como completado o pendiente

6. feat: función para eliminar todos del listado

7. feat: estados de carga y mensajes de espera con useState

8. feat: manejo básico de errores en peticiones con try/catch

9. refactor: separación de lógica en componentes y limpieza

10. docs: actualización del README con funcionalidades implementadas

11. chore: placeholder para editar todos (reto por implementar)

12. chore: placeholder para filtros (reto por implementar) 

🧩 Reto (pendiente por implementar)

Editar todos

Filtros (todos / completados / pendientes)

#**gg**
👤 Autor

Jhon Londoño

Proyecto de formación – SENA / React