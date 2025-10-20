import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (text) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), text, completed: false },
    ]);
  };

  // Toggle completion and reorder tasks so completed go last
  const toggleCompletion = (id) => {
    setTasks((prev) => {
      const newTasks = prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      const incomplete = newTasks.filter((t) => !t.completed);
      const complete = newTasks.filter((t) => t.completed);
      return [...incomplete, ...complete];
    });
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}
export default App;